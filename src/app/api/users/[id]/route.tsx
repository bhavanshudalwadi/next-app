import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest, content: any) {
    console.log(content.params);

    return NextResponse.json({ name: 'Bhavanshu', designation: 'Software Developer' }, { status: 200 })
}