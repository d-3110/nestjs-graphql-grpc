"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealTag = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function generateData() {
    const data = [];
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
const mealTag = async () => {
    await prisma.mealTag.createMany({ data: generateData() });
};
exports.mealTag = mealTag;
//# sourceMappingURL=meal_tag.js.map