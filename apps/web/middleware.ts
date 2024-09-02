import { NextRequest, NextResponse } from "next/server"

export const middleware = (request: NextRequest) => {
    const url = request.nextUrl.clone();

    if (request.nextUrl.pathname.includes('demo')) {
        const afCookie = request.cookies.get('name');
        if (!(afCookie && afCookie.value === 'af')) {
            return NextResponse.redirect('https://www.google.com');
        }
    }
    console.log(`mid 17`)
    if (request.headers.get('accept-language')?.startsWith('zh-CN')) {
        if (!url.pathname.startsWith('/cn')) {
            url.pathname = `/cn${url.pathname}`;
            return NextResponse.redirect(url)
        }
    } else {
        if (!url.pathname.startsWith('/en')) {
            url.pathname = `/en${url.pathname}`;
            return NextResponse.redirect(url)
        }
    }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\.svg$).*)','/'],
    
}
