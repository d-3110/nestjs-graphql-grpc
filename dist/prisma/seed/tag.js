"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tag = exports.faker = void 0;
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
exports.faker = new faker_1.Faker({
    locale: [faker_1.ja, faker_1.en],
});
const prisma = new client_1.PrismaClient();
const tag = async () => {
    await prisma.tag.createMany({
        data: Array(40)
            .fill(0)
            .map(() => ({
            name: exports.faker.word.sample(),
        })),
    });
};
exports.tag = tag;
//# sourceMappingURL=tag.js.map