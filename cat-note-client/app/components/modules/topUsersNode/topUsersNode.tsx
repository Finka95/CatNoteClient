'use client'

import React from "react";
import './topUsersNode.scss';
import {User} from "@/app/ts/interfaces/user"

type Props = {
  topUsers: User[]
}

const TopUsersNode = (props: Props) => {
  return (
    <div className="topUsers">
      <div className="topUsers__title">Top users</div>

      <div>
        {props.topUsers.map(user =>
          <div key={user.id} className="topUsers__user">
            <div className="topUsers__user__userName">{user.userName}</div>

            <div className="topUsers__user__point">
              {user.achievements?.reduce((acc, x) => acc + (x?.point || 0), 0)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopUsersNode;
