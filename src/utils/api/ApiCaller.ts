/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosResponse } from "axios";

const defaultURL = "https://[::1]:8000/api";

interface ApiCallParams {
    method: string;
    url: string;
    headers?: Record<string, string>;
    params?: Record<string, any>;
    data?: any;
}

const ApiCall = (
    method: string,
    endpoint: string,
    headers?: Record<string, string>,
    params?: Record<string, any>,
    body?: any
) => {
    const config: ApiCallParams = {
        method,
        url: defaultURL + endpoint,
        headers: { ...headers },
        params: { ...params },
        data: body,
    };
    return axios(config);
};

export const get = (
    endpoint: string,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return ApiCall("GET", endpoint, headers, params);
};

export const post = (
    endpoint: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return ApiCall("POST", endpoint, headers, params, body);
};

export const put = (
    endpoint: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return ApiCall("PUT", endpoint, headers, params, body);
};

export const remove = (
    endpoint: string,
    body?: any,
    params?: Record<string, any>,
    headers?: Record<string, string>
): Promise<AxiosResponse> => {
    return ApiCall("DELETE", endpoint, headers, params, body);
};