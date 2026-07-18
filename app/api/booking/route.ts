import { NextResponse } from 'next/server';

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      redirect: 'follow',
    });

    const text = await response.text();

    return new Response(text, {
      status: response.status,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: 'Server error',
      },
      {
        status: 500,
      }
    );
  }
}