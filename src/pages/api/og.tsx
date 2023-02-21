import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { getAll } from '@vercel/edge-config';
import { TopStory } from 'lib/types';

export const config = {
	runtime: 'edge',
};

type EdgeConfigData = {
	lastUpdated: string;
	topStories: TopStory[];
};

export default async function handler(req: NextRequest) {
	try {
		let { lastUpdated, topStories } = (await getAll<EdgeConfigData>(['lastUpdated', 'topStories']))!;

		const date = new Date(lastUpdated);

		lastUpdated = date.toLocaleString('en-US', {
			timeZone: 'America/Los_Angeles',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		});

		return new ImageResponse(
			(
				<div tw='bg-[#F6F6F0] text-black h-full w-full flex items-center justify-center'>
					<div tw='flex flex-col justify-center items-center w-1/2 h-full'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/512px-Y_Combinator_logo.svg.png?20161016225220'
							tw='h-32 w-32'
						/>
						<p tw='text-xl'>Top Stories</p>
						<p tw='text-lg -mt-4 text-[#828282]'>As of {lastUpdated} (PST)</p>
					</div>
					<div tw='flex justify-center items-center w-1/2 h-full'>
						<div tw='flex flex-col px-6'>
							{topStories.map((item) => {
								return (
									<div key={item.id} tw='flex flex-col mb-4'>
										<h1 tw='text-3xl font-bold'>{item.title}</h1>
										<p tw='text-xl mt-2 text-[#858585]'>
											{item.score} points by {item.by}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
				headers: {
					'Cache-Control': 'no-cache, no-store',
				},
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
