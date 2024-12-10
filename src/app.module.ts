import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GyerekekModule } from './gyerekek/gyerekek.module';

@Module({
  imports: [GyerekekModule, GyerekekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
