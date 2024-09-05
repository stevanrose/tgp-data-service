import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TraderDetailModule } from './trader-detail/trader-detail.module';

@Module({
  imports: [TraderDetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
