import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

export interface ApiServiceResponse extends AxiosResponse {
  error?: AxiosError
  message?: any;
  code?: number;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common = HEADERS;

axios.interceptors.response.use(
  res => res,
  error => {
    const response = error.response.data;
    const code = response?.statusCode;
    const message = response?.message;
    const err = {
      error,
      message,
      code
    };
    console.log(err);
    return err;
  }
)

export default class ApiService {
  public static get(url: string, config?: AxiosRequestConfig) {
    return axios.get(url, config);
  }

  public static post(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.post(url, data, config);
  }

  public static put(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.put(url, data, config);
  }

  public static patch(url: string, data?: any, config?: AxiosRequestConfig) {
    return axios.patch(url, data, config);
  }

  public static delete(url: string, config?: AxiosRequestConfig) {
    return axios.delete(url, config);
  }
}
