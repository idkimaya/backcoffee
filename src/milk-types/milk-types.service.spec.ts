import { Test, TestingModule } from '@nestjs/testing';
import { MilkTypesService } from './milk-types.service';

describe('MilkTypesService', () => {
  let service: MilkTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MilkTypesService],
    }).compile();

    service = module.get<MilkTypesService>(MilkTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
