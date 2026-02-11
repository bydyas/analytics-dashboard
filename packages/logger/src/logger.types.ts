import { ModuleMetadata } from '@nestjs/common';

export interface LoggerModuleOptions {
  name: string;
  level: 'silly' | 'debug' | 'info';
}

export interface LoggerModuleAsyncOptions extends Pick<
  ModuleMetadata,
  'imports'
> {
  inject?: any[];
  useFactory?: (
    ...args: any[]
  ) => Promise<LoggerModuleOptions> | LoggerModuleOptions;
}
