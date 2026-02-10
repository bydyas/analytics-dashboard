import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { CACHE_MODULE_OPTIONS } from './cache.token';
import type {
  CacheModuleAsyncOptions,
  CacheModuleOptions,
} from './cache.types';
import { CacheService } from './cache.service';
import { DEFAULT_TTL_IN_SECONDS } from './cache.constants';

@Global()
@Module({})
export class CacheModule {
  static forRoot(options: CacheModuleOptions): DynamicModule {
    return {
      module: CacheModule,
      controllers: [],
      providers: [
        {
          provide: CACHE_MODULE_OPTIONS,
          useValue: {
            ...options,
            stdTTL:
              options.stdTTL === undefined
                ? DEFAULT_TTL_IN_SECONDS
                : options.stdTTL, // allow to set 0
          },
        },
        CacheService,
      ],
      exports: [CacheService],
    };
  }

  static forRootAsync(options: CacheModuleAsyncOptions): DynamicModule {
    const asyncOptionsProvider: Provider = {
      provide: CACHE_MODULE_OPTIONS,
      useFactory: options.useFactory!,
      inject: options.inject || [],
    };

    return {
      module: CacheModule,
      imports: options.imports || [],
      controllers: [],
      providers: [asyncOptionsProvider, CacheService],
      exports: [CacheService],
    };
  }
}
