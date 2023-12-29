import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { user } from './user';
import { tag } from './tag';
import { meal } from './meal';
import { mealTag } from './meal_tag';
import { history } from './history';

const main = async () => {
  console.log('🌱 Start seeding ...');
  await prisma.history.deleteMany();
  await prisma.mealTag.deleteMany();
  await prisma.meal.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.user.deleteMany();
  console.log('Delete complete!!');
  await user();
  await tag();
  await meal();
  await mealTag();
  await history();
  console.log('🌱 Seeding finished.');
};

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
