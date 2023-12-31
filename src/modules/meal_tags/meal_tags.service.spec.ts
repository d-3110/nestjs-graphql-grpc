import { Test, TestingModule } from '@nestjs/testing';
import { MealTagsService } from './meal_tags.service';

describe('MealTagsService', () => {
  let service: MealTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealTagsService],
    }).compile();

    service = module.get<MealTagsService>(MealTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
