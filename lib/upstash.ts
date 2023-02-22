import { TopStory } from './types';

import { Redis } from '@upstash/redis';

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

export const updateTopStories = async (topStories: TopStory[]) => {
	await redis.del('top-stories');
	await Promise.all(topStories.map((story) => redis.rpush('top-stories', story)));
	await redis.set('last-updated', new Date().toISOString());
};

export const getTopStories = async (): Promise<TopStory[]> => {
	return redis.lrange('top-stories', 0, 2);
};

export const getLastUpdated = async (): Promise<string> => {
	return redis.get('last-updated') as Promise<string>;
};
