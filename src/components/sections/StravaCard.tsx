import { StavaData } from "../../interfaces/StravaData";
import workoutImage from '../../assets/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg'
import toughMudder2023 from '../../assets/toughmudder2023.jpg'

import Icon from '@mdi/react';
import { mdiHeart, mdiHeartFlash, mdiMapMarkerDistance } from '@mdi/js';

interface expectedProps {
    obj: StavaData
}

export const StravaCard: React.FC<expectedProps> = (props) => {

    let displayDistance;
    if (props.obj.distance) {
        displayDistance =
            <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                <p className="flex justify-center text-center font-mono">{(Math.floor(props.obj.distance * 100) / 100000).toFixed(2)}km</p>
                <span className=''>Distance</span>
                <Icon className="flex mx-auto" path={mdiMapMarkerDistance} size={1} color={'purple'} />
            </div>


    }

    let displayMap;
    if (props?.obj?.map?.summary_polyline) {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={`http://maps.googleapis.com/maps/api/staticmap?path=enc:${props?.obj?.map?.summary_polyline}&size=600x400&zoom=13&format=jpg&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}></img>
    } else if (props.obj.name == 'Tough Mudder 2023' && !props?.obj?.map?.summary_polyline) {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={toughMudder2023}></img>
    } else {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={workoutImage}></img>
    }



    return (
        <div className="w-96 mx-10 mt-24 drop-shadow-4xl hover:scale-110 hover:duration-300">
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