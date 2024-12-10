import { Injectable } from '@nestjs/common';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class GyerekService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.Gyerek.findMany();
  }

  async findOne(id: number) {
    return this.prisma.Gyerek.findUnique({
      where: { id },
    });
  }

  async create(createGyerekDto: CreateGyerekekDto) {
    return this.prisma.Gyerek.create({
      data: createGyerekDto,
    });
  }

  async update(id: number, updateGyerekDto: UpdateGyerekekDto) {
    return this.prisma.Gyerek.update({
      where: { id },
      data: updateGyerekDto,
    });
  }

  async remove(id: number) {
    return this.prisma.Gyerek.delete({
      where: { id },
    });
  }
}
