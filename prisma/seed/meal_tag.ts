import { PrismaClient, Prisma, Meal, Tag } from '@prisma/client';
const prisma = new PrismaClient();

function generateData(
  meals: Array<Meal>,
  tags: Array<Tag>,
): Prisma.MealTagCreateManyInput[] {
  console.log('debug');
  console.log(tags[0]);
  console.log(tags);
  const data: Prisma.MealTagCreateManyInput[] = [];
  for (const meal of meals) {
    const tag_count = Math.floor(Math.random() * 5);
    const dup = [];
    for (let i = 0; i < tag_count; i++) {
      const index = Math.floor(Math.random() * tags.length);
      if (dup.includes(index)) {
        continue;
      }
      dup.push(index);
      data.push({
        meal_id: meal.id,
        tag_id: tags[index].id,
      });
    }
  }
  return data;
}

export const mealTag = async () => {
  const meals = await prisma.meal.findMany();
  const tags = await prisma.tag.findMany();
  await prisma.mealTag.createMany({ data: generateData(meals, tags) });
};
