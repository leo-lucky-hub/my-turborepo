import {NextResponse } from "next/server"

export const GET = async () => {
    return new Promise<NextResponse>((resolve) => {
        setTimeout(() => {
            resolve(NextResponse.json({ error: 'Internal Server Error' }, { status: 500 }));
        }, 3000); 
    });
    
}