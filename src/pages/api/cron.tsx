import { NextRequest, NextResponse } from 'next/server';

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

export default function handler(req: NextRequest) {
	return NextResponse.json({
		name: `Hello, from ${req.url} I'm now an Edge Function!`,
	});
}
