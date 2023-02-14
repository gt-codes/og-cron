import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
	response.headers.set('x-geo', request.geo?.country ?? '');

	// return NextResponse.rewrite(new URL('/api/og', request.url), {
	// 	headers: response.headers,
	// });
	return NextResponse.next({
		headers: response.headers,
	});
}

export const config = {
	matcher: ['/', '/config'],
};
