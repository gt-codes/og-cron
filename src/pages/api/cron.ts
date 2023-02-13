import { updateTopStories } from 'lib/upstash';
import { NextResponse } from 'next/server';

export const config = {
	runtime: 'edge',
};

const getHackerNews = async () => {
	const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
	const data = await res.json();
	const topStories = await Promise.all(data.slice(0, 3).map((item: string) => getHNItem(item)));
	return topStories;
};

const getHNItem = async (item: string) => {
	const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`);
	const data = await res.json();
	return data;
};

export default async function handler() {
	try {
		const hackerNewsData = await getHackerNews();

		updateTopStories(
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
			name: `Updated top stories at ${new Date().toISOString()}. Ids: ${hackerNewsData
				.map((item) => item.id)
				.join(', ')} `,
		});
		return NextResponse.json({
			name: `Updated top stories at ${new Date().toISOString()}. Ids: ${hackerNewsData
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
