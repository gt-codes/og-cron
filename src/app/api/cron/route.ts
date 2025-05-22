import { updateTopStories } from 'lib/upstash';
import { NextResponse } from 'next/server';

const getHackerNews = async () => {
	const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
	const data = await res.json();
	return await Promise.all(data.slice(0, 3).map((item: string) => getHNItem(item)));
};

const getHNItem = async (item: string) => {
	const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
	return await res.json();
};

export async function GET() {
	try {
		const hackerNewsData = await getHackerNews();

		const res = await updateTopStories(
			hackerNewsData.map((item) => ({
				id: item.id,
				by: item.by,
				url: item.url,
				time: item.time,
				title: item.title,
				score: item.score,
			}))
		);

		console.log({
			res,
			data: `Updated top stories at ${new Date().toISOString()}. Ids: ${hackerNewsData
				.map((item) => item.id)
				.join(', ')} `,
		});
		return NextResponse.json({
			data: `Updated top stories at ${new Date().toISOString()}. Ids: ${hackerNewsData
				.map((item) => item.id)
				.join(', ')} `,
		});
	} catch (error: unknown) {
		console.log({ error });
		if (error instanceof Error) {
			return NextResponse.json({
				error: error.message,
			});
		}
		return NextResponse.json({
			error: 'An unknown error occurred',
		});
	}
}
