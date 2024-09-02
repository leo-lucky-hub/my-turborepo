import {NextResponse } from "next/server"

export const GET = () => {
    const data = [{"id" : 1}, {"id" : 2}, {"id" : 3}, {"id" : 4}];
    return NextResponse.json(data);
}