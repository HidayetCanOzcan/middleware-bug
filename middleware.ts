import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
	console.log('⚠️', req.nextUrl.pathname);
	return NextResponse.next();
}
