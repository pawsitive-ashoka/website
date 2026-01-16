import { getAllDogs } from '@/lib/dogs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const dogs = getAllDogs();
    return NextResponse.json(dogs);
  } catch (error) {
    console.error('Error loading dogs:', error);
    return NextResponse.json({ error: 'Failed to load dogs' }, { status: 500 });
  }
}
