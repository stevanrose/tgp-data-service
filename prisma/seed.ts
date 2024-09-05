import { fakerEN as faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  for (let i = 0; i < 26; i++) {
    await prisma.traderDetail.create({
      data: {
        version: 1,
        eori: 'GB' + faker.string.numeric({ length: 15 }),
        active: faker.datatype.boolean(),
        ukimAuth: faker.string.alpha({ length: 32 }),
        nirmsAuth: faker.string.alpha({ length: 13 }),
        niphlAuth: faker.string.alpha({ length: 8 }),
        actorId: faker.string.alpha({ length: 17 }),
        srcSystemName: faker.string.alpha({ length: 10 }),
        clientId: faker.string.uuid(),
        correlationId: faker.string.uuid(),
        msgOriginatedDatetime: faker.date.recent(),
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
