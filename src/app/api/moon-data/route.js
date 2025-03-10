import { NextResponse } from 'next/server';

// Cache duration: 2 hours in seconds (for Next.js fetch cache)
const CACHE_DURATION = 3 * 60 * 60;

export async function GET() {
  try {
    // Use Next.js built-in fetch caching
    const API_KEY = process.env.ASTRONOMY_API_KEY || process.env.NEXT_PUBLIC_ASTRONOMY_API_KEY;
    
    // Mill Creek, WA coordinates (approximately)
    const lat = 47.8601;
    const lng = -122.2043;

    const response = await fetch(
      `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${lat}&long=${lng}`,
      { 
        next: { 
          revalidate: CACHE_DURATION 
        } 
      }
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API response error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`Failed to fetch moon data: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error in moon data API route:', error);
    return NextResponse.json({ error: 'Failed to fetch moon data' }, { status: 500 });
  }
}