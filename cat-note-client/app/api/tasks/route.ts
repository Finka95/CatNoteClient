import { getAccessToken } from "@auth0/nextjs-auth0";

const backendApi = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request:any) {

    const { accessToken } = await getAccessToken(request);

    const response = await fetch(`http://localhost:5237/api/tasks`, {
        headers: {
            Authorization: `Bearer ${accessToken}` 
        }
    });

    const responseJson = response.json();
    return Response.json(responseJson);
}