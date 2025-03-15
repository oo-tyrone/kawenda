import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

async function saveToDB(data: any) {
  // This is a placeholder for the actual database saving logic
  console.log('Saving to database:', data);
  // In a real implementation, this would connect to your database
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    await saveToDB(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing chat request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
} 