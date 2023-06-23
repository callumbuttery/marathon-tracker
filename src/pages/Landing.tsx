import { CountDown } from "../components/CountDown"
import { DonationButton } from "../components/buttons/DonationButton"
import { ViewEventButton } from "../components/buttons/ViewEvent"
import { ProgressBar } from "../components/loading/ProgressBar";

import Icon from '@mdi/react';
import { mdiFlagCheckered, mdiRun } from '@mdi/js';

export const Landing: React.FC = () => {

    return (
        <div>
            <div className="h-screen bg-gradient-to-tl from-purple-700 to-blue-700 pt-52">
                <div className="w-6/12 mx-auto rounded-2xl pb-2 pt-1 bg-gradient-to-br from-orange-500 to-red-600 drop-shadow-2xl">
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
            </div>
        </div>
    )
}