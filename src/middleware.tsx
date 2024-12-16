import { NextResponse } from "next/server";

export function middleware(request: any) { /* eslint-disable  @typescript-eslint/no-explicit-any */
    // if(request.nextUrl.pathname === '/about/owner') {
        console.log("Not allowed to access /about/* routes")
        return NextResponse.redirect(new URL("/", request.url));        
    // }
}

export const config={
    matcher: [
        "/about/:path*"
    ]
}