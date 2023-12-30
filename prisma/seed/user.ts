import { PrismaClient } from '@prisma/client';
import { fakerJA } from '@faker-js/faker';
export const faker = fakerJA;
const prisma = new PrismaClient();

export const user = async () => {
  await prisma.user.createMany({
    data: Array(5)
      .fill(0)
      .map(() => ({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.string.alphanumeric({ length: 7, casing: 'mixed' }),
      })),
  });
};
