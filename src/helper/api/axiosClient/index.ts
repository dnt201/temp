import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { APIError } from "helper/types";

export const InternalError:APIError = {
    message: 'Internal error during request.',
    code: -500,
}

export const onFulfilledRequest = (rs: AxiosResponse) => rs
export const onRejectedResponse = (error: any) => Promise.reject(InternalError);

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


axiosClient.interceptors.response.use(onFulfilledRequest, onRejectedResponse)
export default axiosClient;