export const StravaCardSkeleton: React.FC = () => {
    return (
        <div className="">
            <div className="mx-auto bg-white shadow-2xl w-96 rounded-2xl animate-pulse mt-16 mb-8 max-md:w-72">
                <div className="h-48 p-3 overflow-hidden bg-gray-200 animate-pulse rounded-2xl">
                </div>
                <div className="p-3">
                    <div className="grid grid-cols-3 gap-4 mt-2">
                        <div className="h-8 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse">
                        </div>
                        <div className="h-8 bg-gray-200 rounded  animate-pulse">
                        </div>
                        <div className="...">
                        </div>
                        <div className="col-span-2 ...">
                        </div>
                    </div>
                </div>
            </div>
            <span className="flex justify-center text-white text-3xl mb-24 font-teko">Generating Maps...</span>
        </div>
    )
}