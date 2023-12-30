import { PrismaClient } from '@prisma/client';
import { fakerJA } from '@faker-js/faker';
export const faker = fakerJA;
const prisma = new PrismaClient();

export const tag = async () => {
  const tags = [
    '中華',
    '和食',
    '洋食',
    '高級',
    '安価',
    '麺',
    'あっさり',
    'こってり',
  ];
  await prisma.tag.createMany({
    data: tags.map((name) => ({
      name: name,
    })),
  });
};
