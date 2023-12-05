'use client'
import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

function Page() {
  const { user } = useUser();
  const [myUsers, setMyUsers] = useState<any>([]);

  async function getTasksClick() {
    await handleGet()
  }

  const handleGet = async () => {
    await fetch("/api/users", { method: "GET" })
      .then(async (res) => {
        const usersResponce = await res.json();
        setMyUsers(usersResponce);
      });
  };

  if (user) {
    console.log(user);
    return (
      <>
        <div onClick={() => getTasksClick()}>click</div>
        <a href="/api/auth/logout">Logout</a>
        <div>Hi</div>
      </>
    )
  }
  else {
    console.log("нет");
    return (
      <>
        <a href="/api/auth/login">Login</a>
      </>
    )
  }
}

export default Page;
