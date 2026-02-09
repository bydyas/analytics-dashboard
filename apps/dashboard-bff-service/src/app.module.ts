import { Module } from '@nestjs/common';
import { AppConfigModule } from 'nestjs-env-getter';

import { AppConfig } from './app.config';
import { AnalyticsModule } from './analytics/analytics.module';

@Module({
  imports: [AppConfigModule.forRoot({ useClass: AppConfig }), AnalyticsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
