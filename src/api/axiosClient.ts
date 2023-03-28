import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        // "Content-Type": "application/json",
    },
});
axiosClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    const accessToken = await localStorage.getItem("accessToken");

    if (accessToken) {
        config.headers.setAuthorization(`Bearer ${accessToken}`)
    }
    return await config;
});
axiosClient.interceptors.response.use(
    async (response) => {
        return response;
    },
);
export default axiosClient;