import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GyerekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}

  @Get()
  async findAll() {
    return this.gyerekService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.gyerekService.findOne(+id);
  }

  @Post()
  async create(@Body() createGyerekDto: CreateGyerekekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekekDto) {
    return this.gyerekService.update(+id, updateGyerekDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.gyerekService.remove(+id);
  }
}
