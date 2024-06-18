import axios, { AxiosRequestConfig } from 'axios';
import { IResponse } from './interface';

const proxy = axios.create({ baseURL: 'https://tooptime.com/api/' });

proxy.interceptors.request.use((config) => {
  if (config.method && ['post', 'put'].includes(config.method)) {
    try {
      for (const key in config.data) {
        if (config.data[key] === '') {
          config.data[key] = undefined;
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  if (config.params) {
    const keys = Object.keys(config.params);
    for (const key of keys) {
      if (Array.isArray(config.params[key])) {
        config.params[key] = `[${config.params[key].join(',')}]`;
      }
    }
  }
  return config;
});

proxy.interceptors.response.use(null, (error) => {
  const message = ['خطا رخ داد. دوباره تلاش کنید.'];

  return Promise.reject({
    messages: error?.response?.data?.messagesList ?? message,
    message: (error?.response?.data?.messagesList ?? message).join('، '),
    data: error?.response?.data?.data,
    httpStatusCode: error.response?.status,
  });
});

export default {
  get<TData = any>(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return proxy.get(url, config).then((response) => {
      const temp: IResponse<TData> = {
        data: response.data.data,
        message: response.data.message,
      };
      return temp;
    });
  },
  post<TData = any>(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return proxy.post(url, data, config).then((response) => {
      const temp: IResponse<TData> = {
        data: response.data.data,
        message: response.data.messagesList.join('، '),
      };
      return temp;
    });
  },
  put<TData = any>(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return proxy.put(url, data, config).then((response) => {
      const temp: IResponse<TData> = {
        data: response.data.data,
        message: response.data.messagesList.join('، '),
      };
      return temp;
    });
  },
  patch<TData = any>(url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) {
    return proxy.patch(url, data, config).then((response) => {
      const temp: IResponse<TData> = {
        data: response.data.data,
        message: response.data.messagesList.join('، '),
      };
      return temp;
    });
  },
  delete(url: string, config?: AxiosRequestConfig<any> | undefined) {
    return proxy.delete(url, config);
  },
};
