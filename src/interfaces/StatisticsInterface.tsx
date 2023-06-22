export interface StatisticsInterface {
    exerciseData: {
        recentRunTotals: {
            count: number,
            distance: number,
            moving_time: number,
            elapsed_time: number,
            achievement_count: number
        },
        all_run_totals: {
            count: number,
            distance: number,
            moving_time: number,
            elapsed_time: number,
            achievement_count: number
        }
    }
}