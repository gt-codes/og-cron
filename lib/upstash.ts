import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

type TopStory = {
	id: number;
	by: string;
	url: string;
	time: number;
	title: string;
	score: number;
};

export const updateTopStories = async (topStories: TopStory[]) => {
	await redis.ltrim('top-stories', 1, 0);
	await Promise.all(topStories.map((story) => redis.lpush('top-stories', story)));
	await redis.set('last-updated', new Date().toISOString());
};

export const getTopStories = async (): Promise<TopStory[]> => {
	return redis.lrange('top-stories', 0, 2);
};

export const getLastUpdated = async (): Promise<string> => {
	return redis.get('last-updated') as Promise<string>;
};
