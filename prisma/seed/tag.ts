import { PrismaClient } from '@prisma/client';
import { Faker, ja, en } from '@faker-js/faker';
export const faker = new Faker({
  locale: [ja, en],
});
const prisma = new PrismaClient();

export const tag = async () => {
  await prisma.tag.createMany({
    data: Array(40)
      .fill(0)
      .map(() => ({
        name: faker.word.sample(),
      })),
  });
};
