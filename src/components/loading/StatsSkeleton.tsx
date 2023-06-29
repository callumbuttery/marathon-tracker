export const StatsSkeleton: React.FC = () => {
    return (
        <div className="flex justify-center">
            <div className="h-24 border-2 bg-gray-200 rounded-md w-60 mt-10 animate-pulse">
                <div className="flex flex-row items-center justify-center h-full space-x-5 animate-pulse">

                    <div className="flex flex-col space-y-3">
                        <div className="h-6 bg-gray-300 rounded-md w-36 ">
                        </div>
                        <div className="h-6 bg-gray-300 rounded-md w-36">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}