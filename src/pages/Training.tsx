import { StravaCard } from "../components/sections/StravaCard"
import React, { useEffect, useState } from 'react';

import { fetchStravaData } from "../lib/StravaHelpers";
import { StavaData } from "../interfaces/StravaData";

import { StatsCard } from "../components/sections/StatsCard";

import { StravaCardSkeleton } from "../components/loading/StravaCardSkeleton";
import { StatsSkeleton } from "../components/loading/StatsSkeleton";


export const Training: React.FC = () => {

    const [activityData, setActivityData] = useState([]);
    const [stats, setStats] = useState();

    useEffect(() => {
        async function callStrava() {
            const data = await fetchStravaData();

            if (data?.exerciseData) {
                setStats(data.exerciseData);
            }

            if (data?.allActivitiesData && !data.errorType) {
                setActivityData(data.allActivitiesData.map((item: StavaData) => {
                    return <StravaCard obj={item} key={Math.random()}/>
                }))
            }

        }

        callStrava();
    }, []);

    
    function setStatsData() {
        if(stats){
            return <StatsCard exerciseData={stats} />
        } else {
            return <StatsSkeleton  />
        }
    }

    return (
        <div className="h-max bg-gradient-to-tl from-red-600 to-orange-500 pt-32">
            <h1 className="text-6xl flex justify-center text-white font-mono tracking-widest">TRAINING DIARY</h1>
                { 
                    setStatsData() 
                }
            <div className="place-items-center pt-10 pb-32 max-w-fit flex-wrap mx-auto max-sm:ml-8 flex justify-center max-sm:inline-block">
                {
                    activityData.length ? activityData : <StravaCardSkeleton />                       
                }
            </div>
        </div>
    )
}