import axios from 'axios';
import { appConfig } from '@/app.config';

export const api = axios.create({
  baseURL: appConfig.baseApi,
  timeout: 1000,
  headers: { 
    'Content-Type': 'application/json',
  }
});