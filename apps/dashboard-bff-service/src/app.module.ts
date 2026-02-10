import { Module } from '@nestjs/common';
import { AppConfigModule } from 'nestjs-env-getter';
import { CacheModule } from '@common/cache';

import { AppConfig } from './app.config';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [
    AppConfigModule.forRoot({ useClass: AppConfig }),
    CacheModule.forRootAsync({
      useFactory: ({ stdTTL }: AppConfig) => ({ stdTTL }),
      inject: [AppConfig],
    }),
    AnalyticsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
