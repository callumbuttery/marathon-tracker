import Icon from '@mdi/react';
import { mdiHeart, mdiHeartFlash } from '@mdi/js';

import { StatisticsInterface } from '../../interfaces/StatisticsInterface';

export const StatsCard: React.FC<StatisticsInterface> = (props) => {
    console.log('props: ', props);
    return (
        <div>
            <div className="bg-white max-w-md mx-auto rounded-lg mt-16">
                <span className='flex justify-center font-mono'>STATISTICS</span>
                <div className="flex justify-center mt-8">
                    <div className="flex justify-center mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono">
                            <span>111</span>
                        </span>
                        <span className=''>Average HR</span>
                        <Icon className="flex mx-auto" path={mdiHeart} size={1} color={'red'} />
                    </div>
                    <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                        <span className="countdown font-mono">
                            <span>111</span>
                        </span>
                        <span className=''>Max HR</span>
                        <Icon className="flex mx-auto" path={mdiHeartFlash} size={1} color={'red'} />
                    </div>
                </div>
            </div>
        </div>
    )
}