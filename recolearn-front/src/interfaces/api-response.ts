export interface IAPIResponse<T>{
    body: T;
    status: boolean;
    error: string | null;
}