import { ModuleMetadata } from '@nestjs/common';
import NodeCache from 'node-cache';

export type CacheModuleOptions = NodeCache.Options;

export interface CacheModuleAsyncOptions extends Pick<
  ModuleMetadata,
  'imports'
> {
  inject?: any[];
  useFactory?: (
    ...args: any[]
  ) => Promise<CacheModuleOptions> | CacheModuleOptions;
}
