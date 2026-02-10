import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, beforeEach, expect } from '@jest/globals';
import { CacheService } from '../cache.service';
import { CACHE_MODULE_OPTIONS } from '../cache.token';

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CacheService,
        {
          provide: CACHE_MODULE_OPTIONS,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
