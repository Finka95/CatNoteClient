'use client'

import React, {useEffect, useState} from 'react';
import './page.scss';
import Block from "@/app/components/ui-components/block/block";
import {User} from "@/app/ts/interfaces/user";

function UsersPage() {
  const[users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("/api/users", {method: "GET"})
      .then(async (res) => {
        const usersResponse : User[] = await res.json();
        setUsers(usersResponse);
      })
  }

  return (
    <div className="usersPage">
      {users && users.map(user =>
        <Block key={user.id} id={user.id as number} text={user.userName as string}/>
      )}
    </div>
  );
}

export default UsersPage;
