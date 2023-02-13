export default function Head() {
	return (
		<>
			<link rel='icon' href='/favicon.ico' />
			<title>HN Top Stories via Vercel Crons</title>
			<meta content='width=device-width, initial-scale=1' name='viewport' />
			<meta property='og:image' content='https://og-cron.vercel.app/api/og' />
			<meta name='description' content='The top stories on Hacker News, powered by Vercel Crons.' />
			<meta property='og:description' content='The top stories on Hacker News, powered by Vercel Crons.' />
		</>
	);
}
