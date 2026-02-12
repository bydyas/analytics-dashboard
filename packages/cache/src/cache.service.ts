import { Inject, Injectable } from '@nestjs/common';
import NodeCache from 'node-cache';

import { CACHE_MODULE_OPTIONS } from './cache.token';
import type { CacheModuleOptions } from './cache.types';
import { hashString } from './cache.utils';

@Injectable()
export class CacheService {
  private cache: NodeCache;

  constructor(
    @Inject(CACHE_MODULE_OPTIONS) private readonly options: CacheModuleOptions,
  ) {
    this.cache = new NodeCache(options);
  }

  /**
   * Creates a caching key.
   *
   * @param seed - A key seed.
   * @returns Hashed key.
   */
  public createKey(seed: string | number | object): string {
    if (typeof seed === 'object') {
      const key = [];
      for (let k in seed) {
        key.push(seed[k] instanceof Date ? seed[k].getTime() : seed[k]);
      }
      return hashString(key.join(':'));
    }
    return hashString(`${seed}`);
  }

  /**
   * Sets a cached key and data.
   *
   * @param key - A cache key.
   * @param data - A data to be stored.
   * @returns true
   */
  public set<T = unknown>(key: string, data: T): boolean {
    return this.cache.set<T>(key, data);
  }

  /**
   * Gets data by the cached key.
   *
   * @param key - A cache key.
   * @returns A cached data.
   */
  public get<T = unknown>(key: string): T | undefined {
    return this.cache.get<T>(key);
  }

  /**
   * Deletes data by the cached key.
   *
   * @param key - A cache key.
   * @returns A cached data.
   */
  public del(key: string): number {
    return this.cache.del(key);
  }

  /**
   * Gets the cache statistics.
   *
   * @returns Stats.
   */
  private getStats(): NodeCache.Stats {
    return this.cache.getStats();
  }
}
