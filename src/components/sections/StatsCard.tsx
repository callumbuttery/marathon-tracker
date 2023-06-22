import Icon from '@mdi/react';
import { mdiTimerCheck, mdiRun, mdiCounter } from '@mdi/js';

import { StatisticsInterface } from '../../interfaces/StatisticsInterface';

import { distanceCalculator } from '../../lib/StravaHelpers';

export const StatsCard: React.FC<StatisticsInterface> = (props) => {
    console.log('props: ', props);
    return (
        <div className=''>
            <span className='flex justify-center mt-16 text-white'>
                Recent Run Stats
            </span>
            <div className="bg-white max-w-md mx-auto rounded-lg">
                <div className='mt-8 py-2 px-2'>
                    <div className="flex justify-center">
                        <div className="flex justify-center mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{props.exerciseData.recentRunTotals.count} Runs</span>
                            </span>
                            <Icon className="flex mx-auto" path={mdiCounter} size={1} color={'black'} />
                        </div>
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{distanceCalculator(props.exerciseData.recentRunTotals.distance)}km</span>
                            </span>
                            <Icon className="flex mx-auto" path={mdiRun} size={1} color={'red'} />
                        </div>
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{(props.exerciseData.recentRunTotals.elapsed_time / 3600).toFixed(2)} Hours</span>
                            </span>
                            <Icon className="flex mx-auto" path={mdiTimerCheck} size={1} color={'blue'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}