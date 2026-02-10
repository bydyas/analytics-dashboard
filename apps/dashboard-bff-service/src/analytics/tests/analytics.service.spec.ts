import { Test, TestingModule } from '@nestjs/testing';
import { describe, it, beforeEach, expect, jest } from '@jest/globals';
import { AnalyticsService } from '../analytics.service';
import { CacheService } from '@common/cache';

describe('AnalyticsService', () => {
  let service: AnalyticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnalyticsService,
        {
          provide: CacheService,
          useValue: {
            get: jest.fn(),
            set: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AnalyticsService>(AnalyticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
