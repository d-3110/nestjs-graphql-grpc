import { PrismaClient, Prisma, Meal } from '@prisma/client';
import { fakerJA } from '@faker-js/faker';
export const faker = fakerJA;
const prisma = new PrismaClient();

function generateData(meals: Array<Meal>): Prisma.HistoryCreateManyInput[] {
  const data: Prisma.HistoryCreateManyInput[] = [];
  for (const meal of meals) {
    const date = faker.date.between({
      from: '2020-01-01 00:00:00.000Z',
      to: '2023-12-31T00:00:00.000Z',
    });
    data.push({
      meal_id: meal.id,
      created_at: date,
      updated_at: date,
    });
  }
  return data;
}

export const history = async () => {
  const meals = await prisma.meal.findMany();
  await prisma.history.createMany({ data: generateData(meals) });
};
