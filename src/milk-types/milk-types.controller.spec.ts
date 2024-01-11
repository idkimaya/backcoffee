import { Test, TestingModule } from '@nestjs/testing';
import { MilkTypesController } from './milk-types.controller';

describe('MilkTypesController', () => {
  let controller: MilkTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MilkTypesController],
    }).compile();

    controller = module.get<MilkTypesController>(MilkTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
