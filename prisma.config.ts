import { defineConfig } from "prisma/config";

import { serverConfig } from './src/config/serverConfig.ts'

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: serverConfig.database.url
  },
});
