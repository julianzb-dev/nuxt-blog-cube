import {defineConfig} from 'drizzle-kit'

export default defineConfig({
    dialect: 'sqlite',
    schema: './server/database/schema.ts',
    out: './server/database/migrations',
    migrations: {
        prefix: "timestamp",
        table: "__drizzle_migrations__",
        schema: "public",
    },
    breakpoints: true,
    strict: true,
    verbose: true,
})
