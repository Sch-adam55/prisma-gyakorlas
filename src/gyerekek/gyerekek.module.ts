import { Module } from '@nestjs/common';
import { GyerekService } from './gyerekek.service';
import { GyerekController, } from './gyerekek.controller';
import { PrismaService } from '../prisma.service';


@Module({
  controllers: [GyerekController],
  providers: [GyerekService],
  imports:[PrismaService],
})
export class GyerekekModule {}
