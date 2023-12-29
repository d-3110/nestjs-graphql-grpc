import { PrismaClient } from '@prisma/client';
import { Faker, ja, en } from '@faker-js/faker';
export const faker = new Faker({
  locale: [ja, en],
});
const prisma = new PrismaClient();

export const meal = async () => {
  await prisma.meal.createMany({
    data: Array(20)
      .fill(0)
      .map(() => ({
        name: faker.word.noun(),
        type: 1,
      })),
  });
};
