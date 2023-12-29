"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.history = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const history = async () => {
    await prisma.history.createMany({
        data: Array(10)
            .fill(0)
            .map((v, i) => ({
            meal_id: i,
        })),
    });
};
exports.history = history;
//# sourceMappingURL=history.js.map