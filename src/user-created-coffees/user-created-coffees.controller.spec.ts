import { Test, TestingModule } from '@nestjs/testing';
import { UserCreatedCoffeesController } from './user-created-coffees.controller';

describe('UserCreatedCoffeesController', () => {
  let controller: UserCreatedCoffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCreatedCoffeesController],
    }).compile();

    controller = module.get<UserCreatedCoffeesController>(UserCreatedCoffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
