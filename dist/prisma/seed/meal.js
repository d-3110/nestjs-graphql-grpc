"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meal = exports.faker = void 0;
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
exports.faker = new faker_1.Faker({
    locale: [faker_1.ja, faker_1.en],
});
const prisma = new client_1.PrismaClient();
const meal = async () => {
    await prisma.meal.createMany({
        data: Array(20)
            .fill(0)
            .map(() => ({
            name: exports.faker.word.noun(),
            type: 1,
        })),
    });
};
exports.meal = meal;
//# sourceMappingURL=meal.js.map