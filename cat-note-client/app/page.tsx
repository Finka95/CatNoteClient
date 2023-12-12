'use client'

import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useState } from "react";

export default function Home() {
  const { user } = useUser();
  const [myUsers, setMyUsers] = useState<any>([]);

  async function getUsersClick() {
    await handleGet()
  }

  const handleGet = async () => {
    await fetch("/api/users", { method: "GET" })
      .then(async (res) => {
        const usersResponse = await res.json();
        setMyUsers(usersResponse);
      });
  };

  if (user) {
    return (
      <>
        <div onClick={() => getUsersClick()}>click</div>
        <a href="/api/auth/logout">Logout</a>
        <div>Welcome to CatNote!</div>
      </>
    )
  }
  else {
    return (
      <>
        <a href="/api/auth/login">Login</a>
      </>
    )
  }
}
