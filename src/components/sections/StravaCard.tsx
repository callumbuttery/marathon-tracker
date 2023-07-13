import { StavaData } from "../../interfaces/StravaData";
import workoutImage from '../../assets/kelly-sikkema-IZOAOjvwhaM-unsplash.jpg'
import toughMudder2023 from '../../assets/toughmudder2023.jpg'

import Icon from '@mdi/react';
import { mdiHeart, mdiHeartFlash, mdiMapMarkerDistance, mdiTrophyVariant } from '@mdi/js';

import { distanceCalculator } from "../../lib/StravaHelpers";

interface expectedProps {
    obj: StavaData
}

export const StravaCard: React.FC<expectedProps> = (props) => {

    let displayDistance;
    if (props.obj.distance) {
        displayDistance =
            <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content">
                <p className="flex justify-center text-center font-teko">{distanceCalculator(props.obj.distance)}km</p>
                <span className='font-teko'>Distance</span>
                <Icon className="flex mx-auto" path={mdiMapMarkerDistance} size={1} color={'purple'} />
            </div>
    }

    let displayMap;
    if (props?.obj?.map?.summary_polyline) {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={`http://maps.googleapis.com/maps/api/staticmap?path=enc:${props.obj.map.summary_polyline}&size=600x400&zoom=13&format=jpg&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`}></img>
    } else if (props.obj.name == 'Tough Mudder 2023' && !props?.obj?.map?.summary_polyline) {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={toughMudder2023}></img>
    } else {
        displayMap = <img className="rounded-t-lg h-48 w-96" src={workoutImage}></img>
    }

    return (
        <div className="w-96 mx-10 mt-24 drop-shadow-2xl hover:scale-110 hover:duration-300 max-sm:w-72 max-sm:mx-0">
            {
                props.obj.type == 'Event' &&
                <Icon path={mdiTrophyVariant} size={2} color="gold" className="flex justify-center mx-auto mb-2" />

            }
            <div className="h-96 max-w-sm bg-white rounded-lg shadow">
                <a href="#">
                    {
                        displayMap
                    }
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="flex justify-center text-center mb-2 text-3xl font-bold tracking-tight text-gray-900 font-teko">{props.obj.name}</h5>
                    </a>
                    <div className="flex justify-center mt-8">
                        {
                            displayDistance
                        }
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content max-sm:pb-5">
                            <span className="countdown font-teko">
                                <span>{props.obj.average_heartrate?.toFixed(0)}</span>
                            </span>
                            <span className='font-teko'>Average HR</span>
                            <Icon className="flex mx-auto" path={mdiHeart} size={1} color={'red'} />
                        </div>
                        <div className="mx-5 flex flex-col text-center bg-neutral rounded-box text-neutral-content max-sm:pb-">
                            <span className="countdown font-teko">
                                <span>{props.obj.max_heartrate?.toFixed(0)}</span>
                            </span>
                            <span className='font-teko'>Max HR</span>
                            <Icon className="flex mx-auto" path={mdiHeartFlash} size={1} color={'red'} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}