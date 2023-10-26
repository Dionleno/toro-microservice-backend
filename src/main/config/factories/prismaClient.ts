import { PrismaClient } from '@prisma/client' 

export const buildPrismaClient = async (): Promise<PrismaClient> => {
  const { DATABASE_URL } = process.env
  return new PrismaClient({ datasources: { db: { url: DATABASE_URL } } })
}