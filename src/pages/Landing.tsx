import { CountDown } from "../components/CountDown"
import { DonationButton } from "../components/buttons/DonationButton"
import { ViewEventButton } from "../components/buttons/ViewEvent"
import { ProgressBar } from "../components/loading/ProgressBar";
import { ScrollAnimator } from "../components/ScrollAnimator";

import Icon from '@mdi/react';
import { mdiFlagCheckered, mdiRun } from '@mdi/js';
import axios from 'axios';

export async function Landing(){

    const data = await axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/athlete/activities?access_token=${import.meta.env.VITE_STRAVA_KEY}`,
      });

    console.log('data: ', data);

    return (
        <div className="h-screen bg-gradient-to-tl from-indigo-700 to-purple-700 pt-52">
            <div className="w-6/12 mx-auto rounded-2xl pb-2 pt-1 border-2">
                <CountDown />
                <div className="flex justify-center items-center font-mono text-xl mt-12 text-white">
                    <Icon path={mdiRun} size={1} color={'white'} />
                    <span className="ml-2 mr-2">Edinburgh Half Marathon 2023</span>
                    <Icon path={mdiFlagCheckered} size={1.5} color={'white'} />
                </div>
                <div className="flex justify-center items-center font-mono text-xl text-white">
                    24.09.23
                </div>
                <div className="flex justify-center mt-6">
                    <DonationButton />
                    <ViewEventButton />
                </div>
                <div className="mt-4 mb-4">
                    <ProgressBar />
                </div>
            </div>
            <ScrollAnimator />
        </div>
    )
}