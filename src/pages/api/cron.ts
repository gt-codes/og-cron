import { updateTopStories } from 'lib/upstash';
import { NextResponse } from 'next/server';

export const config = {
	runtime: 'edge',
};

const getHackerNews = async () => {
	const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
	const data = await res.json();
	return await Promise.all(data.slice(0, 3).map((item: string) => getHNItem(item)));
};

const getHNItem = async (item: string) => {
	const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
	return await res.json();
};

export default async function handler() {
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
	} catch (error: any) {
		console.log({ error });
		return NextResponse.json({
			error: error.message,
		});
	}
}
