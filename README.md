# Next.js Cron OG

This Next.js template automatically fetches the top stories from Hacker News every minute and stores them in [Upstash](https://vercel.com/integrations/upstash), a Redis client. This template uses [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) to generate an Open Graph (OG) image at the edge, leveraging Upstash for efficient data storage and retrieval.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or view the demo [here](https://cron.vercel.zone/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/gt-codes/og-cron&project-name=og-cron&repository-name=og-cron&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17&envDescription=API%20Keys%20from%20your%20Vercel%20account%20needed%20to%20run%20this%20application.)

## Features

-   Automatic fetching of top stories from Hacker News
-   **Upstash** as a data store for efficient data storage and retrieval
-   **Vercel OG** for automatic generation of Open Graph (OG) image
-   Updates Hacker News data every minute thanks to **Vercel Cron Jobs**

## Usage

1. Clone the repository: `git clone https://github.com/gt-codes/og-cron.git`
2. Copy the `.env.example` file in this directory to `.env.local`
    - `UPSTASH_REDIS_REST_URL`: The REST URL for your Upstash Redis instance
    - `UPSTASH_REDIS_REST_TOKEN`: The REST token for your Upstash Redis instance

## Start the development server

```bash
npm install
npm run dev
```
