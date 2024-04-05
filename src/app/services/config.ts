// eslint-disable-next-line import/prefer-default-export
export const BASE_URL = import.meta.env.VITE_ROOT_URL;

export const Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
