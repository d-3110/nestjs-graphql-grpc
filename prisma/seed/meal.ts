import { PrismaClient } from '@prisma/client';
import { fakerJA } from '@faker-js/faker';
export const faker = fakerJA;
const prisma = new PrismaClient();

export const meal = async () => {
  await prisma.meal.createMany({
    data: Array(20)
      .fill(0)
      .map(() => ({
        name: faker.word.noun(),
        type: Math.floor(Math.random() * 2),
      })),
  });
};
