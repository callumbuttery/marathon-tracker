import { StatisticsInterface } from '../../interfaces/StatisticsInterface';

import { StatsCardSubSestion } from './StatsCardSubSection';

export const StatsCard: React.FC<StatisticsInterface> = (props) => {
    return (
        <div className=''>
            <div className='mx-auto flex grid grid-cols-2 gap-0 w-7/12 mt-24 drop-shadow-2xl gap-10 font-teko max-md:grid-cols-1 max-md:w-10/12'>
                <StatsCardSubSestion statsData={props.exerciseData.recentRunTotals} name="Recent Runs"/>
                <StatsCardSubSestion statsData={props.exerciseData.all_run_totals} name="All Runs"/>
            </div>
        </div>
    )
}