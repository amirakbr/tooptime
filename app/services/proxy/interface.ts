export interface IResponse<TData = any> {
  message: string;
  data: TData;
}

export interface IError {
  httpStatusCode?: number;
  data?: any;
  message?: string;
}
