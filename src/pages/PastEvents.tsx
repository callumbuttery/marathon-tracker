import Icon from '@mdi/react';
import { mdiFlagCheckered, mdiRun } from '@mdi/js';

import { StravaCard } from '../components/sections/StravaCard';

export const PastEvents: React.FC = () => {

    const dataObj = {
        name: 'Tough Mudder 2023',
        //will be divided into km
        distance: 17620,
        type: 'Event',
    }

    return (
        <div className="h-screen bg-gradient-to-tl from-blue-700 to-sky-400 pt-32">
            <div className='flex justify-center'>
                <h1 className="text-6xl text-white font-mono tracking-widest">PAST EVENTS</h1>
            </div>
            <div className='flex justify-center'>
                <StravaCard obj={dataObj} />
            </div>
        </div>
    )
}