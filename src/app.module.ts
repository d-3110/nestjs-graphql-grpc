import { Module } from '@nestjs/common';
import { UsersController } from './modules/users/users.controller';
import { UsersService } from './modules/users/users.service';
import { PrismaModule } from 'nestjs-prisma';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from './modules/users/users.module';
import { MealsModule } from './modules/meals/meals.module';
import { TagsModule } from './modules/tags/tags.module';
import { HistoriesModule } from './modules/histories/histories.module';
import { MealTagsModule } from './modules/meal_tags/meal_tags.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // debug: true,
      playground: true,
      autoSchemaFile: './src/schema.graphql',
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    UsersModule,
    MealsModule,
    TagsModule,
    HistoriesModule,
    MealTagsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
