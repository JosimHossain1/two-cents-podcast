export async function GET(req: Request) {
  // const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  // const CHANNEL_ID = process.env.CHANNEL_ID;
  const url = `GET https://www.googleapis.com/youtube/v3/channels
`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return new Response('Failed to fetch YouTube data', { status: 500 });
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response('Error fetching YouTube data', { status: 500 });
  }
}