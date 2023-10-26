import { PrismaClient } from ".prisma/client";
import { AccountMock } from "./data/accounts";
import { ActivesMock } from "./data/actives";
import { ClientsMock } from "./data/clients";
import { StatusMock } from "./data/status";

const prisma = new PrismaClient({ datasources: { db: { url: 'postgresql://username:password@localhost:5432/toro?schema=public' } } })
async function runSeeders() {
  //clients
  await Promise.all(
    ClientsMock.map(async (data) => 
      prisma.clients.upsert({
        where: { id: data.id },
        update: {},
        create: data,
      })
    )
  );

  //checking_account
  await Promise.all(
    AccountMock.map(async (data) => 
      prisma.checking_account.upsert({
        where: { id: data.id },
        update: {},
        create: data,
      })
    )
  );

  //checking_account
  await Promise.all(
    StatusMock.map(async (data) => 
      prisma.status.upsert({
        where: { id: data.id },
        update: {},
        create: data,
      })
    )
  );

  //actives
  await Promise.all(
    ActivesMock.map(async (data) => 
      prisma.actives.upsert({
        where: { id: data.id },
        update: {},
        create: data,
      })
    )
  );
}

runSeeders()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
      console.log(e);
      
    await prisma.$disconnect();
    process.exit(1);
  });
