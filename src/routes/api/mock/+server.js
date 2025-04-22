import mockData from '$lib/mock/data.json';

export function GET() {
  return new Response(JSON.stringify(mockData), {
    headers: { 'Content-Type': 'application/json' }
  });
}