import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const history = async () => {
  await prisma.history.createMany({
    data: Array(10)
      .fill(0)
      .map((v, i) => ({
        meal_id: i,
      })),
  });
};
