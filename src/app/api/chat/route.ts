import { NextResponse } from 'next/server';

export const runtime = 'edge';

// 在实际项目中，这个接口会被用于类型检查
// interface ChatData {
//   message: {
//     name: string;
//     email: string;
//     message: string;
//   };
// }

// 这个函数在实际项目中会被使用，这里仅作为示例
// export async function saveToDB(data: ChatData) {
//   // This is a placeholder for the actual database saving logic
//   console.log('Saving to database:', data);
//   // In a real implementation, this would connect to your database
//   return true;
// }

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message: { name: string; email: string; message: string } = body.message;
    
    console.log('Received message:', message);
    
    // 在实际项目中，这里会调用saveToDB函数
    // await saveToDB({ message });
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing chat message:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to process message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
} 