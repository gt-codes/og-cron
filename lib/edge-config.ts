import { TopStory } from './types';

export const updateTopStories = async (topStories: TopStory[]) => {
	await fetch(
		`https://api.vercel.com/v1/edge-config/${process.env.EDGE_CONFIG_ID}/items?teamId=${process.env.VERCEL_TEAM_ID}`,
		{
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				items: [
					{
						operation: 'upsert',
						key: 'topStories',
						value: topStories,
					},
					{
						operation: 'upsert',
						key: 'lastUpdated',
						value: new Date().toISOString(),
					},
				],
			}),
		}
	);
};
