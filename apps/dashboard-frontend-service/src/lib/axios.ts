import axios, { isAxiosError } from 'axios';
import { appConfig } from '@/app.config';

export const api = axios.create({
  baseURL: appConfig.baseApi,
  timeout: 1000,
  headers: { 
    'Content-Type': 'application/json',
  }
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (isAxiosError(error) && error.response && error.response.data) {
      const { status } = error.response;
      const { message, code, name, errors } = error.response.data;

      if (status === 400) {
        throw new BadFiltersError(Array.isArray(message) ? message.join('\n') : message);
      }

      throw new Error(`[${name}]:[${code}]:${JSON.stringify({ message, errors })}`);
    }
    return Promise.reject(error);
  }
);

export class BadFiltersError extends Error {
  constructor(message?: string) {
    super(message)
    this.name = 'BadFiltersError'
  }
}

export const handleThrowOnError = (error: Error): boolean => {
  if (error instanceof BadFiltersError) return false
  return true
}
