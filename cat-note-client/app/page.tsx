'use client'
import React, {useState} from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { NextResponse } from "next/server";
//import { getTasks } from "./api/users/route";

function Page() {
  const { user } = useUser();
  const [myUser, setMyUser] = useState<any>(null);


  async function getTasksClick() {
    await handleGet()
  }

  const handleGet = async () => {
    console.log("123")
    //const data = await getTasks();

    await fetch("/api/users", { method: "GET" }).then((res) => {
      setMyUser(res);
      console.log(res);
    });

    if (myUser) {
      console.log("4324")
      const data = await myUser.json();

      if (data) {
        console.log(data)
      }
    }
  };

  if (user) {
    console.log(user);
    return (
      <>
        <div onClick={() => getTasksClick()}>click</div>
        <a href="/api/auth/login">Login</a>
        <div>Hi</div>
      </>
    )
  }
  else {
    console.log("нет");
    return (
      <>
      </>
    )
  }
}

export default Page;