import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HistoriesService } from './histories.service';
import { History } from './entities/history.entity';
import { CreateHistoryInput } from './dto/create-history.input';
import { UpdateHistoryInput } from './dto/update-history.input';

@Resolver(() => History)
export class HistoriesResolver {
  constructor(private readonly historiesService: HistoriesService) {}

  @Mutation(() => History)
  createHistory(@Args('createHistoryInput') createHistoryInput: CreateHistoryInput) {
    return this.historiesService.create(createHistoryInput);
  }

  @Query(() => [History], { name: 'histories' })
  findAll() {
    return this.historiesService.findAll();
  }

  @Query(() => History, { name: 'history' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.historiesService.findOne(id);
  }

  @Mutation(() => History)
  updateHistory(@Args('updateHistoryInput') updateHistoryInput: UpdateHistoryInput) {
    return this.historiesService.update(updateHistoryInput.id, updateHistoryInput);
  }

  @Mutation(() => History)
  removeHistory(@Args('id', { type: () => Int }) id: number) {
    return this.historiesService.remove(id);
  }
}
