export interface Response<T> {
  data: T;
  message: string;
  success: boolean;
  timestamp: string;
  traceId: string;
}

export interface DataResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
