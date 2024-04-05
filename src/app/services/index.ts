import axios, { AxiosHeaderValue, AxiosRequestConfig } from "axios";
import { Authorization, BASE_URL } from "@app/services/config";
import PATHS from "@app/services/paths";

export const http = axios.create({
  baseURL: BASE_URL,
});

// Note:
// - As each API function call creates a new function execution context,
// we don't save failed requests config in an array. instead we preserve
// the config in a Promise, so later we can call it.
// - apiMiddleware should return a promise. so returning the .then() or awaited value
// is not correct.

const HTTP_SERVICE = {
  refreshIsCalled: false,
  async refreshCaller() {
    return new Promise((resolve, reject) => {
      if (!this.refreshIsCalled) {
        this.refreshIsCalled = true;
        setTimeout(() => {
          http.post(PATHS.refresh, {
            refreshToken: localStorage.getItem("refreshToken"),
          }).then((resp) => {
            localStorage.setItem("accessToken", resp.data.accessToken);
            resolve(resp.data.accessToken);
          }).catch((error) => {
            reject(error);
          }).finally(() => {
            setTimeout(() => {
              this.refreshIsCalled = true;
            }, 1000);
          });
        }, 300);
      } else {
        resolve(localStorage.getItem("accessToken"));
      }
    });
  },
  async apiMiddleware(callOptions: AxiosRequestConfig) {
    const p = await http(callOptions).then((resp) => {
      return Promise.resolve(resp);
    }).catch(async (error) => {
      if (error.response.status === 401) {
        const failedReq = Promise.resolve(error.response.config);

        const refreshResult = await this.refreshCaller();
        const failedConfig = await failedReq;

        failedConfig.headers.Authorization = `Bearer ${refreshResult}`;
        const res = await http(failedConfig).then((resp) => {
          return Promise.resolve(resp);
        });
        return res;
      }
      return Promise.reject(error);
    });
    return p;
  },
};

export function GET(
  url: string,
  customHeaders?: Omit<AxiosHeaderValue, "Authorization">,
  config?: Omit<AxiosRequestConfig, "url" | "method" | "headers">,
  disableAuth?: boolean,
) {
  return HTTP_SERVICE.apiMiddleware({
    method: "GET",
    url,
    headers: {
      ...customHeaders,
      ...(!disableAuth && { Authorization }),
    },
    ...config,
  });
}

export function POST<D>(
  url: string,
  data: D,
  customHeaders?: Omit<AxiosHeaderValue, "Authorization">,
  config?: Omit<AxiosRequestConfig, "url" | "method" | "data">,
  disableAuth?: boolean,
) {
  return HTTP_SERVICE.apiMiddleware({
    method: "POST",
    url,
    data,
    headers: {
      ...customHeaders,
      ...(!disableAuth && { Authorization }),
    },
    ...config,
  });
}
