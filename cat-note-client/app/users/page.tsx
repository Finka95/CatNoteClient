'use client'

import React, {useEffect, useState} from 'react';
import './page.scss';
import Block from "@/app/components/ui-components/block/block";
import {User} from "@/app/ts/interfaces/user";
import { redirect } from 'next/navigation'

function UsersPage() {
  const[users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if(localStorage.getItem('isAdmin') != "true") {
      redirect("/");
    }

    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("/api/users", {method: "GET"})
      .then(async (res) => {
        const usersResponse : User[] = await res.json();
        setUsers(usersResponse);
      })
  }

  const changeRoleClick = async  (event: React.ChangeEvent<HTMLInputElement>, userId: number) => {
    const user : User = users.filter(user => user.id == userId)[0];
    console.log(event.target.checked)
    user.isAdmin = event.target.checked;

    console.log(user);

    await fetch(`/api/users`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    await getUsers();
  }

  return (
    <div className="usersPage">
      {users && users.map(user =>
        <Block
          key={user.id}
          id={user.id as number}
          checked={user.isAdmin || false}
          handleChange={(event: React.ChangeEvent<HTMLInputElement>, userId: number) => changeRoleClick(event, userId)}
          text={user.userName as string}
          label="isAdmin"/>
      )}
    </div>
  );
}

export default UsersPage;
