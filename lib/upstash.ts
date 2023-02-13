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
	await redis.del('top-stories');
	await Promise.all(topStories.map((story) => redis.rpush('top-stories', story)));
};

export const getTopStories = async (): Promise<TopStory[]> => {
	return redis.lrange('top-stories', 0, 2);
};
