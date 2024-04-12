export const BASE_URL = import.meta.env.VITE_ROOT_URL;

export const getAuthToken = () => `Bearer ${localStorage.getItem("accessToken")}`;
