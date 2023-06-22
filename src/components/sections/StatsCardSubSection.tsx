import Icon from '@mdi/react';
import { mdiTimerCheck, mdiRun, mdiCounter } from '@mdi/js';
import { distanceCalculator } from '../../lib/StravaHelpers';

interface statsData {
    statsData: {
        count: number;
        distance: number;
        moving_time: number;
        elapsed_time: number;
        achievement_count: number;
    }
    name: string,
}

export const StatsCardSubSestion: React.FC<statsData> = (props) => {
    console.log('props: ', props);
    return (
        <div>
            <div className="bg-white max-w-md mx-auto rounded-lg">
                <span className='text-black flex justify-center'>
                    {props.name}
                </span>
                <div className='py-2 px-2'>
                    <div className="flex justify-center">
                        <div className="flex justify-center mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{props.statsData.count} Runs</span>
                            </span>
                            <Icon className="flex mx-auto" path={mdiCounter} size={1} color={'black'} />
                        </div>
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{distanceCalculator(props.statsData.distance)}km</span>
                            </span>
                            <Icon className="flex mx-auto" path={mdiRun} size={1} color={'red'} />
                        </div>
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{(props.statsData.elapsed_time / 3600).toFixed(2)} Hours</span>
                            </span>
                            <Icon className="flex mx-auto" path={mdiTimerCheck} size={1} color={'blue'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}