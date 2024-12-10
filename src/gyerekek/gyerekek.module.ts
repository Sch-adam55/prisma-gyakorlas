import { Module } from '@nestjs/common';
import { GyerekekService } from './gyerekek.service';
import { GyerekekController } from './gyerekek.controller';

@Module({
  controllers: [GyerekekController],
  providers: [GyerekekService],
})
export class GyerekekModule {}
