import Icon from '@mdi/react';
import { mdiTimerCheck, mdiRun, mdiCounter } from '@mdi/js';

import { StatisticsInterface } from '../../interfaces/StatisticsInterface';

import { distanceCalculator } from '../../lib/StravaHelpers';

export const StatsCard: React.FC<StatisticsInterface> = (props) => {
    return (
        <div className=''>
            <div className='mx-auto flex grid grid-cols-2 gap-0 w-7/12 mt-24 drop-shadow-2xl'>
                <div className="bg-white max-w-md mx-auto rounded-lg">
                    <span className='text-black flex justify-center'>
                        Recent Run Stats
                    </span>
                    <div className='py-2 px-2'>
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
                <div className="bg-white max-w-md mx-auto rounded-lg">
                    <span className='text-black flex justify-center'>
                        Total Run Stats
                    </span>
                    <div className='py-2 px-2'>
                        <div className="flex justify-center">
                            <div className="flex justify-center mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono">
                                    <span>{props.exerciseData.all_run_totals.count} Runs</span>
                                </span>
                                <Icon className="flex mx-auto" path={mdiCounter} size={1} color={'black'} />
                            </div>
                            <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono">
                                    <span>{distanceCalculator(props.exerciseData.all_run_totals.distance)}km</span>
                                </span>
                                <Icon className="flex mx-auto" path={mdiRun} size={1} color={'red'} />
                            </div>
                            <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono">
                                    <span>{(props.exerciseData.all_run_totals.elapsed_time / 3600).toFixed(2)} Hours</span>
                                </span>
                                <Icon className="flex mx-auto" path={mdiTimerCheck} size={1} color={'blue'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}