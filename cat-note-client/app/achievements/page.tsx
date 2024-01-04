'use client'

import React, {useEffect, useState} from 'react';
import {Achievement} from "@/app/ts/interfaces/achievement";
import './page.scss';
import {User} from "@/app/ts/interfaces/user";
import BasicAccordion from '../components/ui-components/accordion/accordion';

function AchievementsPage() {
  const [targetUserId, setTargetUserId] = useState<string>()
  const [userAchievements, setUserAchievements] = useState<Achievement[]>([]);
  const [allAchievements, setAllAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    setTargetUserId(localStorage.getItem("targetUserId") || "");
  }, []);

  useEffect( () => {
    if (targetUserId){
      loadAchievements()
    }
  }, [targetUserId]);

  const loadAchievements = async () => {
    await getUserAchievements();
    await getOtherAchievements();
  }

  const getOtherAchievements = async () => {
    await fetch("/api/achievements", {method: "GET"})
      .then(async (res) => {
        const achievementsResponse : Achievement[] = await res.json();
        setAllAchievements(achievementsResponse);
      })
  }

  const getUserAchievements = async () => {
    await fetch(`/api/achievements/${targetUserId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(async (res) => {
        const achievementsResponse : Achievement[] = await res.json();
        setUserAchievements(achievementsResponse);
      })
  }

  return (
    <div className="achievementsPage">
      <div className="achievementsPage__content">
        <div className="achievementsPage__header">
          <div className="achievementsPage__header__leftCircle"></div>
          <div className="achievementsPage__header__rightCircle"></div>
        </div>
        <div className="achievementsPage__received">
          <div className="achievementsPage__title">Received achievements</div>
          {userAchievements && userAchievements.map(achievement =>
            <BasicAccordion key={achievement.id} title={achievement?.title} description={achievement?.description}/>
          )}
        </div>

        <div className="achievementsPage__notReceived">
          <div className="achievementsPage__title">Not received achievements</div>
          {allAchievements && allAchievements.filter(achievement => !userAchievements.some(userAchievement => userAchievement.id === achievement.id)).map(achievement =>
            <BasicAccordion key={achievement.id} title={achievement?.title} description={achievement?.description}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default AchievementsPage;

