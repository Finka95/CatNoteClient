import {getAccessToken} from "@auth0/nextjs-auth0";
import {NextResponse} from "next/server";

const backendApi = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: any) {
  const {accessToken} = await getAccessToken(req);

  const response = await fetch(`${backendApi}/api/achievement`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

  const responseJson = await response.json();
  return NextResponse.json(responseJson);
}
