import { PrismaClient } from '@prisma/client';
import { Faker, ja, en } from '@faker-js/faker';
export const faker = new Faker({
  locale: [ja, en],
});
const prisma = new PrismaClient();

export const user = async () => {
  await prisma.user.createMany({
    data: Array(5)
      .fill(0)
      .map(() => ({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      })),
  });
};
