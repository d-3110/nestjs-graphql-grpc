import { Test, TestingModule } from '@nestjs/testing';
import { MealsResolver } from './meals.resolver';
import { MealsService } from './meals.service';

describe('MealsResolver', () => {
  let resolver: MealsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealsResolver, MealsService],
    }).compile();

    resolver = module.get<MealsResolver>(MealsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
