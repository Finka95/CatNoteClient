import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";
import { api } from "../api";

const backendApi = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: any) {
    const {accessToken} = await getAccessToken(req);
    console.log(accessToken);
    const response = await fetch(`${backendApi}/api/user`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });

    const responseJson = await response.json();
    console.log(responseJson);
    return Response.json(responseJson);

    //const responseJson = await response.json();
    //return Response.json(body);


    //return new NextResponse(await response.json());
    //return NextResponse.json(response.json());
    //console.log(Response.json(response));
    //return response.body;

}

// export async function getTasks() {
//     console.log("1");
//     const  accessToken  = await getAccessToken(request);
//     console.log(accessToken);

//     //const response = await fetch(`http://localhost:5237/api/task`);
//     const response = await api.get(`/user`);

// //     , {
// //     headers: {
// //         Authorization: `Bearer ${accessToken}`
// //     }
// // }

//     //return NextResponse.json(response);
//     //const responseJson = response.json();
//     console.log(response);
//     return NextResponse.json({message: 'hi'});
//     //return NextResponse.json(response.data);
// }

// export async function GET(request: Request) {
//     return NextResponse.json({message: 'hi'});
// }