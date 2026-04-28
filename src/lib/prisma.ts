import { PrismaClient } from '../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';

import { serverConfig } from '../config/serverConfig.ts';

const adapter = new PrismaPg({
    connectionString: serverConfig.database.url
})

export const prisma = new PrismaClient({ adapter });