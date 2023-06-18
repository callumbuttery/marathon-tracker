import { StavaData } from "../../interfaces/StravaData";
import { getCardImg } from "../../lib/GoogleHelpers";

interface expectedProps {
    obj: StavaData
}

export const StravaCard: React.FC<expectedProps> = (props) => {

    let displayDistance;
    if (props.obj.distance) {
        displayDistance = <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Distance: {(Math.floor(props.obj.distance * 100) / 100000).toFixed(2)}km</p>
    }

    const displayMap = getCardImg(props?.obj?.map?.summary_polyline)


    return (
        <div className="w-96 ml-10 mt-24 drop-shadow-4xl hover:scale-110 hover:duration-300">
            <div className="h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    {
                        displayMap
                    }
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.obj.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.obj.type}</p>
                    {
                        displayDistance
                    }
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>

        </div>
    )
}