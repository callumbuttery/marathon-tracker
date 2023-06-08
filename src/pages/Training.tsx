import { StravaCard } from "../components/sections/StravaCard"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Training: React.FC = () => {

    const [stravaData, setStravaData] = useState([]);

    useEffect(() => {

        async function fetchStravaData() {
            try {
                let response = await axios(`https://www.strava.com/api/v3/athlete/activities?access_token=${import.meta.env.VITE_STRAVA_KEY}`, {
                    method: 'GET',
                })

                if (!response.data) {
                    throw new Error('Failed to get strava data');
                }

                console.log('response: ', response.data)
                setStravaData(response.data);
            } catch (e) {
                alert(e);
            }
        }

        fetchStravaData();
    }, []);

    return (
        <div className="h-screen bg-gradient-to-tl from-blue-700 to-purple-700 pt-32">
            <h1 className="text-6xl flex justify-center text-white font-mono tracking-widest">TRAINING DIARY</h1>
            <div className="flex justify-center mt-32">
                {
                    stravaData.map((item, key) => {
                        return <StravaCard dataObj={item} key={key} />
                    })
                }
            </div>
        </div>
    )
}