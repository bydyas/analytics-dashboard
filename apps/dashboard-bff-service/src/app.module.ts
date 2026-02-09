import { Module } from '@nestjs/common';
import { AppConfigModule } from 'nestjs-env-getter';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AppConfig } from './app.config';

@Module({
  imports: [AppConfigModule.forRoot({ useClass: AppConfig })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
