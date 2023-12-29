import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

function generateData() {
  const data: Prisma.MealTagCreateManyInput[] = [];
  for (let i = 0; i < 20; i++) {
    const tag_id_count = Math.floor(Math.random() * 5);
    const limit = Number(prisma.tag.count) + 1;
    const dup = [];
    for (let j = 0; j < tag_id_count; j++) {
      const tag_id = Math.floor(Math.random() * limit);
      dup.push(tag_id);
      if (dup.includes(tag_id)) {
        continue;
      }
      data.push({
        meal_id: i,
        tag_id: tag_id,
      });
    }
  }
  return data;
}

export const mealTag = async () => {
  await prisma.mealTag.createMany({ data: generateData() });
};
