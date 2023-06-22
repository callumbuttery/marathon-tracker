import { StavaData } from "../../interfaces/StravaData";
import workoutImage from '../../assets/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg'
import toughMudder2023 from '../../assets/toughmudder2023.jpg'

import Icon from '@mdi/react';
import { mdiHeart, mdiHeartFlash, mdiMapMarkerDistance, mdiTrophyVariant, mdiStar } from '@mdi/js';

import { distanceCalculator } from "../../lib/StravaHelpers";

interface expectedProps {
    obj: StavaData
}

export const StravaCard: React.FC<expectedProps> = (props) => {

    let displayDistance;
    if (props.obj.distance) {
        displayDistance =
            <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                <p className="flex justify-center text-center font-mono">{distanceCalculator(props.obj.distance)}km</p>
                <span className=''>Distance</span>
                <Icon className="flex mx-auto" path={mdiMapMarkerDistance} size={1} color={'purple'} />
            </div>


    }

    let displayMap;
    if (props?.obj?.map?.summary_polyline) {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={``}></img>
    } else if (props.obj.name == 'Tough Mudder 2023' && !props?.obj?.map?.summary_polyline) {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={toughMudder2023}></img>
    } else {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={workoutImage}></img>
    }



    return (
        <div className="w-96 mx-10 mt-24 drop-shadow-2  xl hover:scale-110 hover:duration-300">
            {
                props.obj.type == 'Event' &&
                <Icon path={mdiTrophyVariant} size={2} color="gold" className="flex mx-auto mb-2" />

            }
            <div className="h-96 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    {
                        displayMap
                    }
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="flex justify-center text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.obj.name}</h5>
                    </a>
                    <div className="flex justify-center mt-8">
                        {
                            displayDistance
                        }
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{props.obj.average_heartrate?.toFixed(0)}</span>
                            </span>
                            <span className=''>Average HR</span>
                            <Icon className="flex mx-auto" path={mdiHeart} size={1} color={'red'} />
                        </div>
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono">
                                <span>{props.obj.max_heartrate?.toFixed(0)}</span>
                            </span>
                            <span className=''>Max HR</span>
                            <Icon className="flex mx-auto" path={mdiHeartFlash} size={1} color={'red'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}