
export interface IAPISuccess {
  msg: string;
  data: any;
  status: number
}

export interface IAPIError {
  msg: string;
  error: any;
  status: number
}
