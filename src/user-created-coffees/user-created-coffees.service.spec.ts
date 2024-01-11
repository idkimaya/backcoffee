import { Test, TestingModule } from '@nestjs/testing';
import { UserCreatedCoffeesService } from './user-created-coffees.service';

describe('UserCreatedCoffeesService', () => {
  let service: UserCreatedCoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCreatedCoffeesService],
    }).compile();

    service = module.get<UserCreatedCoffeesService>(UserCreatedCoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
