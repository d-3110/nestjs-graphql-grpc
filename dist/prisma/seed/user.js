"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.faker = void 0;
const client_1 = require("@prisma/client");
const faker_1 = require("@faker-js/faker");
exports.faker = new faker_1.Faker({
    locale: [faker_1.ja, faker_1.en],
});
const prisma = new client_1.PrismaClient();
const user = async () => {
    await prisma.user.createMany({
        data: Array(5)
            .fill(0)
            .map(() => ({
            name: exports.faker.internet.userName(),
            email: exports.faker.internet.email(),
            password: exports.faker.internet.password(),
        })),
    });
};
exports.user = user;
//# sourceMappingURL=user.js.map