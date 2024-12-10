import { Test, TestingModule } from '@nestjs/testing';
import { GyerekController } from './gyerekek.controller';
import { GyerekService } from './gyerekek.service';
import { PrismaService } from '../prisma.service';
import { CreateGyerekekDto } from './dto/create-gyerekek.dto';
import * as request from 'supertest';

describe('GyerekController', () => {
  let app;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GyerekController],
      providers: [GyerekService, PrismaService],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should create a new gyerek', async () => {
    const gyerekDto: CreateGyerekekDto = {
      nev: 'Kis Pista',
      lakcim: 'Budapest, Fő utca 1.',
      joVolt: true,
      kertJatek: 'Autó',
    };

    const response = await request(app.getHttpServer())
      .post('/gyerek')
      .send(gyerekDto)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.nev).toBe('Kis Pista');
  });

  afterAll(async () => {
    await app.close();
  });
});
