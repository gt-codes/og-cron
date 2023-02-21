# Next.js Cron OG

This Next.js template automatically fetches the top stories from Hacker News every minute and stores them in [Vercel Edge Config](https://vercel.com/docs/concepts/edge-network/edge-config), a key-value data store. This template uses [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) to generate an Open Graph (OG) image at the edge, leveraging Edge Config for efficient data storage and retrieval.

## Features

-   Automatic fetching of top stories from Hacker News
-   **Vercel Edge Config** as a data store for efficient data storage and retrieval
-   **Vercel OG** for automatic generation of Open Graph (OG) image at the edge
-   Updates to Hacker News data every minute thanks to **Vercel Cron Jobs**

## Usage

1. Clone the repository: `git clone https://github.com/gt-codes/og-cron.git`
2. Follow [these steps](https://vercel.com/docs/concepts/edge-network/edge-config/get-started#create-an-edge-config-in-your-account) to configure your Edge Config store

-   > At this step, you should already have the `EDGE_CONFIG_URL` environment variable. Just add the `EDGE_CONFIG_ID` as well.

3. Set environment variables:
    - `VC_TEAM_ID`: The Vercel Team ID you created the Edge Config store under
    - `VC_ACCESS_TOKEN`: Your Vercel Personal Access Token scoped to your appropriate Vercel Team

## Start the development server

```bash
npm install
npm run dev
```

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or view the demo [here](https://cron.vercel.zone/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/gt-codes/og-cron&project-name=og-cron&repository-name=og-cron&env=VC_TEAM_ID,VC_ACCESS_TOKEN&envDescription=API%20Keys%20from%20your%20Vercel%20account%20needed%20to%20run%20this%20application.)
