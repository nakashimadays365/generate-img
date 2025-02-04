import { ImageResponse } from 'next/og'

export async function POST() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 40,
            color: 'black',
            background: 'white',
            width: '100%',
            height: '100%',
            padding: '50px 200px',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          👋 Hello
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e) {
    console.error('ERROR : ', e)
    return new Response('ERROR', { status: 500 })
  }
}
