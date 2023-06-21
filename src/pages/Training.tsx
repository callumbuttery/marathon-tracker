import { StravaCard } from "../components/sections/StravaCard"
import { useEffect, useState } from 'react';

import { fetchStravaData } from "../lib/StravaHelpers";
import { StavaData } from "../interfaces/StravaData";
import { StatsCard } from "../components/sections/StatsCard";

export const Training: React.FC = () => {

    const [stravaData, setStravaData] = useState([]);

    useEffect(() => {
        async function callStrava() {
            const data = await fetchStravaData();

            if (data?.allActivitiesData && !data.errorType) {
                setStravaData(data.allActivitiesData.map((item: StavaData) => {
                    return <StravaCard obj={item} />
                }))
            }

            if (data?.exerciseData && !data.errorType) {
                console.log('hitting data.exercise');
            }


        }

        callStrava();
    }, []);

    return (
        <div className="h-max bg-gradient-to-tl from-red-600 to-orange-500 pt-32">
            <h1 className="text-6xl flex justify-center text-white font-mono tracking-widest">TRAINING DIARY</h1>
            <StatsCard />
            <div className="place-items-center pt-10 pb-32 max-w-fit flex-wrap mx-auto max-sm:ml-8 flex justify-center max-sm:inline-block">
                {
                    stravaData                        
                }
            </div>
        </div>
    )
}