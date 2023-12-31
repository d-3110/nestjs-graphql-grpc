import { Test, TestingModule } from '@nestjs/testing';
import { MealTagsResolver } from './meal_tags.resolver';
import { MealTagsService } from './meal_tags.service';

describe('MealTagsResolver', () => {
  let resolver: MealTagsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealTagsResolver, MealTagsService],
    }).compile();

    resolver = module.get<MealTagsResolver>(MealTagsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
