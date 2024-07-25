import { AxiosRequestConfig } from "axios";

export interface AxiosProviderModel {
    path: string,
    data: any,
    config: AxiosRequestConfig
}