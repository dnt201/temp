import  { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

/**
 * The Base API
 */
export interface ErrorObjectType {
	message?: string;
	error?: boolean;
	errorObject?: any;
	errorCode?: number;
}

type ResponseType<T> = ErrorObjectType & {
	requestUuid?: string;
	data?: T;
	instance?: Omit<AxiosResponse<T>, 'data'>;
	totalPages?: number;
	totalRecords?: number;
};


export const get = async <T = any, D = any>(
	url: string,
	config?: InternalAxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await axiosClient.get<T & ErrorObjectType>(url, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const post = async <T = any, D = any>(
	url: string,
	data?: D,
	config?: InternalAxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await axiosClient.post<T & ErrorObjectType>(url, data, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const put = async <T = any, D = any>(
	url: string,
	data?: D,
	config?: InternalAxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await axiosClient.put<T & ErrorObjectType>(url, data, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const patch = async <T = any, D = any>(
	url: string,
	data?: D,
	config?: InternalAxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await axiosClient.patch<T & ErrorObjectType>(
			url,
			data,
			config
		);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

export const remove = async <T = any, D = any>(
	url: string,
	config?: InternalAxiosRequestConfig<D>
): Promise<ResponseType<T>> => {
	try {
		const response = await axiosClient.delete<T & ErrorObjectType>(url, config);
		if (response?.data && !response.data?.error) {
			const { data, ...rest } = response;
			return { ...data, instance: rest };
		}
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
