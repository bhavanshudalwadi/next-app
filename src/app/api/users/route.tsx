import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
    return NextResponse.json({ name: 'Bhavanshu', designation: 'Software Developer' }, { status: 200 })
}