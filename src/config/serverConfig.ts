import dotenv from 'dotenv';

import type { config } from '../types/types.ts';

dotenv.config();

export const serverConfig: config = {
    port: process.env.PORT || 8080,
    database: {
        url: process.env.DATABASE_URL || 'ERRO TESTE'
    }
}