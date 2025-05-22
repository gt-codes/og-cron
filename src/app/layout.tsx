import './globals.css';
import { AnalyticsWrapper } from './analytics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'HN Top Stories via Vercel Crons',
	description: 'The top stories on Hacker News, powered by Vercel Crons.',
	openGraph: {
		images: 'https://cron.vercel.zone/api/og',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head>
				<link rel='icon' href='/favicon.ico' />
				<meta content='width=device-width, initial-scale=1' name='viewport' />
			</head>
			<body>
				{children}
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
