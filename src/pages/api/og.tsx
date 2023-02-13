import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

export default async function handler(req: NextRequest) {
	try {
		return new ImageResponse(
			(
				<div tw='bg-[#F6F6F0] text-black h-full w-full flex items-center justify-center'>
					<svg
						width='150'
						height='150'
						viewBox='0 0 150 150'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'>
						<rect width='150' height='150' fill='url(#pattern0)' />
						<defs>
							<pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
								<use xlinkHref='#image0_1894_1745' transform='scale(0.00390625)' />
							</pattern>
							<image
								id='image0_1894_1745'
								width='256'
								height='256'
								xlinkHref='data:image/png;base64,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BADbf/jsCQB8CWALQACw/YfPngDAlwC2AAQA23/47AkAfAlgC0AAsP2Hz54AwJcAtgAEANt/+OwJAHwJYAtAALD9h8+eAMCXALYABADbf/jsCQB8CWALQACw/YfPngDAlwC2AAQA23/47AkAfAlgC0AAsP2Hz54AwJcAtgAEANt/+OwJAHwJYAtAALD9h8+eAMCXALYABADbf/jsCQB8CWALQACw/YfPvge8AlURYN0q//oy2UhNm2Tt2VqlgGk+Z7AqkEFUIAUF+BEoBReZg1oBAqCWjoEpKEAAUnCROagVIABq6RiYggIEIAUXmYNaAQKglo6BKShAAFJwkTmoFSAAaukYmIICBCAFF5mDWgECoJaOgSkoQABScJE5qBUgAGrpGJiCAgQgBReZg1oBAqCWjoEpKEAAUnCROagVIABq6RiYggIEIAUXmYNaAQKglo6BKShAAFJwkTmoFSAAaukYmIICBCAFF5mDWgECoJaOgSkoQABScJE5qBUgAGrpGJiCAgQgBReZg1oBAqCWjoEpKEAAUnCROagVIABq6RiYggIEIAUXmYNaAQKglo6BKShAAFJwkTmoFSAAaukYmIICBCAFF5mDWgECoJaOgSkoQABScJE5qBUgAGrpGJiCAgQgBReZg1oBAqCWjoEpKEAAUnCROagVIABq6RiYggIEIAUXmYNaAQKglo6BKShAAFJwkTmoFSAAaukYmIICBCAFF5mDWgECoJaOgSkoQABScJE5qBUgAGrpGJiCAgQgBReZg1oBAqCWjoEpKEAAUnCROagVIABq6RiYggIEIAUXmYNaAQKglo6BKShAAFJwkTmoFSAAaukYmIIC/wfNJ2NBch9i2AAAAABJRU5ErkJggg=='
							/>
						</defs>
					</svg>

					<div tw='flex justify-center items-center w-1/2 h-full'>
						<div tw='flex flex-col'>
							{/* {hackerNewsData.map((item: any) => {
								return (
									<div tw='flex flex-col mb-4'>
										<h1 tw='text-3xl font-bold'>{item.title}</h1>
										<p tw='text-xl mt-2 text-[#858585]'>
											{item.score} points by {item.by}
										</p>
									</div>
								);
							})} */}
						</div>
					</div>
				</div>
			),
			{
				width: 1200,
				height: 630,
			}
		);
	} catch (e: any) {
		console.log(`${e.message}`);
		return new Response(`Failed to generate the image`, {
			status: 500,
		});
	}
}
