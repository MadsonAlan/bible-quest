import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.
 
export const runtime = 'edge';
 
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
 
    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Leia a palavra de Deus';
 
    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'black',
            backgroundSize: '150px 150px',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="67.341" style={{fill:'#995C0D'}} width="61.724" height="454.866"></rect> <polygon style={{fill:'#F95428'}} points="176.795,448.763 176.795,512 149.332,493.692 121.87,512 121.87,448.763 "></polygon> 
            <path style={{fill:'#B27214'}} d="M421.602,296.608v94.898c-19.126,30.209-20.347,52.179-63.371,63.359H176.795H121.87h-18.882V0 h255.243c19.382,19.382,39.363,20.151,63.371,63.371v94.886L421.602,296.608L421.602,296.608z"></path> <g> <path style={{fill:'#F7B239'}} d="M444.659,170.793v113.292c0,6.921-5.602,12.523-12.523,12.523h-10.533h-18.638 c-11.839,0-21.433-9.594-21.433-21.433v-95.484c0-11.827,9.594-21.433,21.433-21.433h18.638h10.533 C439.056,158.258,444.659,163.872,444.659,170.793z"></path> <path style={{fill:'#F7B239'}} d="M421.602,21.299v42.073c-34.993,0-63.371-28.378-63.371-63.371h42.073 C412.07,0,421.602,9.545,421.602,21.299z"></path> <path style={{fill:'#F7B239'}} d="M421.602,391.506v42.06c0,11.766-9.533,21.299-21.299,21.299h-42.073 C358.231,419.872,386.609,391.506,421.602,391.506z"></path> <polygon style={{fill:'#F7B239'}} points="330.61,164.409 330.61,199.683 270.009,199.683 270.009,353.755 234.735,353.755 234.735,199.683 174.134,199.683 174.134,164.409 234.735,164.409 234.735,101.111 270.009,101.111 270.009,164.409 "></polygon> </g> <g> <circle style={{fill:'#4D4D4D'}} cx="413.089" cy="255.817" r="9.154"></circle> <circle style={{fill:'#4D4D4D'}} cx="413.089" cy="199.061" r="9.154"></circle> </g> </g>
            </svg>
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              fontWeight: 'bold',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}