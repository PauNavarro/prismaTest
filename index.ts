import { Prisma, PrismaClient } from './generated/client/deno/edge.ts'
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config()

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: envVars.DATABASE_URL
        }
    }
})

const testClientData: Prisma.clientCreateInput[] = [
    {
        name: 'John Doe',
        email: 'test@test.com',
    },
    {
        name: 'Jane Doe',
        email: 'test1@test1.com',
    },
]

for (const client of testClientData) {
    await prisma.client.create({ data: client })
}

await prisma.$disconnect()