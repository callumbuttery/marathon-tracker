import { StravaCard } from '../components/sections/StravaCard';

export const PastEvents: React.FC = () => {

    const dataObj = {
        name: 'Tough Mudder 2023',
        //will be divided into km
        distance: 17620,
        type: 'Event',
        max_heartrate: 157,
        average_heartrate: 127,
    }

    return (
        <div className="h-full bg-gradient-to-tl from-blue-700 to-sky-400 pt-32">
            <div className='flex justify-center'>
                <h1 className="text-6xl text-white font-teko tracking-widest max-md:text-3xl">PAST EVENTS</h1>
            </div>
            <div className='flex justify-center pb-72'>
                <StravaCard obj={dataObj} />
            </div>
        </div>
    )
}