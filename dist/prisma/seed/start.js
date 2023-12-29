"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const user_1 = require("./user");
const tag_1 = require("./tag");
const meal_1 = require("./meal");
const meal_tag_1 = require("./meal_tag");
const history_1 = require("./history");
const main = async () => {
    console.log('🌱 Start seeding ...');
    await prisma.history.deleteMany();
    await prisma.mealTag.deleteMany();
    await prisma.meal.deleteMany();
    await prisma.tag.deleteMany();
    await prisma.user.deleteMany();
    console.log('Delete complete!!');
    await (0, user_1.user)();
    await (0, tag_1.tag)();
    await (0, meal_1.meal)();
    await (0, meal_tag_1.mealTag)();
    await (0, history_1.history)();
    console.log('🌱 Seeding finished.');
};
main()
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=start.js.map