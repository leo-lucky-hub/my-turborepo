import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
    const url = request.nextUrl.clone();

    const formData = await request.formData();

    const password = formData.get('password');

    console.log(`password: ${password}`)
    if (password === '123') {
        url.pathname = '/af/demo';
    } else {
        url.pathname = '/af/123';
    }

    return NextResponse.redirect(url);

    
}