import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { GyerekService } from './gyerekek.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import { UpdateGyerekekDto } from './dto/update-gyerekek.dto';

@Controller('gyerekek')
export class GyerekController {
  constructor(private readonly gyerekService: GyerekService) {}

  @Get('all')
  async findAll() {
    return this.gyerekService.findAll();
  }

  @Get('keres:id')
  async findOne(@Param('id') id: string) {
    return this.gyerekService.findOne(+id);
  }

  @Post('létrehoz')
  async create(@Body() createGyerekDto: CreateGyerekekDto) {
    return this.gyerekService.create(createGyerekDto);
  }

  @Put('update:id')
  async update(@Param('id') id: string, @Body() updateGyerekDto: UpdateGyerekekDto) {
    return this.gyerekService.update(+id, updateGyerekDto);
  }

  @Delete('törlés:id')
  async remove(@Param('id') id: string) {
    return this.gyerekService.remove(+id);
  }
}
