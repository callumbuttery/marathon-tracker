import { CountDown } from "../components/CountDown"
import { DonationButton } from "../components/buttons/DonationButton"
import { ViewEventButton } from "../components/buttons/ViewEvent"
import { ProgressBar } from "../components/loading/ProgressBar";

import Icon from '@mdi/react';
import { mdiFlagCheckered, mdiRun } from '@mdi/js';


export const Landing: React.FC = () => {
    return (
        <div className="h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 to-blue-700 pt-72">

            <div className="flex justify-center items-center mt-10 font-mono text-4xl">
                <Icon path={mdiRun} size={1} color={'white'} />
                <span className="ml-2 mr-2">Edinburgh Half Marathon 2023</span>
                <Icon path={mdiFlagCheckered} size={1.5} color={'white'} />
            </div>
            <CountDown />
            <div className="flex justify-center mt-5">
                <DonationButton />
                <ViewEventButton />
            </div>
            <ProgressBar/>
        </div>
    )
}