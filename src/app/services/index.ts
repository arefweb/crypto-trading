import axios, { AxiosHeaderValue, AxiosRequestConfig } from "axios";
import { getAuthToken, BASE_URL } from "@app/services/config";
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

interface HTTPService {
  refreshPromise: null | Promise<any>;
  refreshCaller: () => Promise<any>;
  apiMiddleware: (callOptions: AxiosRequestConfig) => Promise<any>;
}
// ToDo: if refreshToken receives 401, we have to tell login page to issue_refresh=true
const HTTP_SERVICE: HTTPService = {
  refreshPromise: null,
  refreshCaller() {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }
    this.refreshPromise = http.post(PATHS.refresh, {
      refreshToken: localStorage.getItem("refreshToken"),
    }).then((resp) => {
      localStorage.setItem("accessToken", resp.data.accessToken);
      return Promise.resolve(resp.data.accessToken);
    }).catch((error) => {
      localStorage.setItem("accessToken", "");
      return Promise.reject(error);
    });
    return this.refreshPromise;
  },
  async apiMiddleware(callOptions: AxiosRequestConfig) {
    return http(callOptions).then((resp) => {
      return Promise.resolve(resp);
    }).catch(async (error) => {
      const failedConfig = error.response.config;
      if (error.response.status === 401) {
        return this.refreshCaller().then(async (refreshResult) => {
          failedConfig.headers.Authorization = `Bearer ${refreshResult}`;
          return http(failedConfig).then((resp) => {
            return Promise.resolve(resp);
          });
        }).catch((e) => {
          return Promise.reject(e);
        }).finally(() => {
          this.refreshPromise = null;
        });
      }
      return Promise.reject(error);
    });
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
      ...(!disableAuth && { Authorization: getAuthToken() }),
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
      ...(!disableAuth && { Authorization: getAuthToken() }),
    },
    ...config,
  });
}
