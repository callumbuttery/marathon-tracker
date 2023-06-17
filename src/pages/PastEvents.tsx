import { CountDown } from "../components/CountDown"
import { DonationButton } from "../components/buttons/DonationButton"
import { ViewEventButton } from "../components/buttons/ViewEvent"
import { ProgressBar } from "../components/loading/ProgressBar";

import Icon from '@mdi/react';
import { mdiFlagCheckered, mdiRun } from '@mdi/js';

export const PastEvents: React.FC = () => {

    return (
        <div>
            <div className="h-screen bg-gradient-to-tl from-indigo-700 to-purple-700 pt-32">
                <h1 className="text-6xl flex justify-center text-white font-mono tracking-widest">PAST EVENTS</h1>
            </div>
        </div>
    )
}