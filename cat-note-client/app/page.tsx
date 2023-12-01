'use client'
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

function page() {
  const { user } = useUser();

  async function getTasksClick() {
    await handleGet()
  }

  const handleGet = async () => {
    await fetch("/api/tasks", { method: "GET" }).then((res) => {
      console.log(res);
    });
  };

  if (user) {
    console.log(user);
    return (
      <>
        <div onClick={() => getTasksClick()}>click</div>
        <div>"Hi"</div>
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

  return (
    <>
      <a href="/api/auth/login">Login</a>
    </>
  )
}

export default page;