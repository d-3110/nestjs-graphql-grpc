import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MealTagsService } from './meal_tags.service';
import { MealTag } from './entities/meal_tag.entity';
import { CreateMealTagInput } from './dto/create-meal_tag.input';
import { UpdateMealTagInput } from './dto/update-meal_tag.input';

@Resolver(() => MealTag)
export class MealTagsResolver {
  constructor(private readonly mealTagsService: MealTagsService) {}

  @Mutation(() => MealTag)
  createMealTag(@Args('createMealTagInput') createMealTagInput: CreateMealTagInput) {
    return this.mealTagsService.create(createMealTagInput);
  }

  @Query(() => [MealTag], { name: 'mealTags' })
  findAll() {
    return this.mealTagsService.findAll();
  }

  @Query(() => MealTag, { name: 'mealTag' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mealTagsService.findOne(id);
  }

  @Mutation(() => MealTag)
  updateMealTag(@Args('updateMealTagInput') updateMealTagInput: UpdateMealTagInput) {
    return this.mealTagsService.update(updateMealTagInput.id, updateMealTagInput);
  }

  @Mutation(() => MealTag)
  removeMealTag(@Args('id', { type: () => Int }) id: number) {
    return this.mealTagsService.remove(id);
  }
}
