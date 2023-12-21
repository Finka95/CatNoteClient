import {getAccessToken} from "@auth0/nextjs-auth0";
import {NextResponse} from "next/server";

const backendApi = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: any, res: NextResponse){
  const {accessToken} = await getAccessToken(req);
  const userId = req.url.slice(req.url.lastIndexOf('/') + 1);

  const response = await fetch(`${backendApi}/api/achievement/user/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

  const responseJson = await response.json();
  return NextResponse.json(responseJson);
}
