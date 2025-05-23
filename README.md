## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Database Migration

Current database schema
![nuxt-blog-diagram.png](public/nuxt-blog-diagram.png)

1. Create/update database schema: 
   - `server/database/schema.ts`
2. Generate the migrations based on `server/database/schema.ts`: 
   - `npm run db:generate`
3. Once the `npm run dev`/`npm run build` command is executed, the database will be locally created under the below path:
   - `.data/hub/d1`
