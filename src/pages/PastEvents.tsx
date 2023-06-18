import Icon from '@mdi/react';
import { mdiFlagCheckered, mdiRun } from '@mdi/js';

import { StravaCard } from '../components/sections/StravaCard';

export const PastEvents: React.FC = () => {

    const dataObj = {
        name: 'Tough Mudder 2023',
        distance: 17.62,
        type: 'Event'
    }

    return (
        <div>
            <div className="h-max bg-gradient-to-tl from-blue-700 to-sky-400 pt-32">
                <h1 className="text-6xl flex justify-center text-white font-mono tracking-widest">PAST EVENTS</h1>

                <StravaCard obj={dataObj}/>
            </div>
        </div>
    )
}