import { Test, TestingModule } from '@nestjs/testing';
import { EstudianteService } from './estudiantes.service';

describe('EstudiantesService', () => {
  let service: EstudianteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstudianteService],
    }).compile();

    service = module.get<EstudianteService>(EstudianteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
