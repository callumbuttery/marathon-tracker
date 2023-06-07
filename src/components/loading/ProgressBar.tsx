import Icon from '@mdi/react';
import { mdiPartyPopper } from '@mdi/js';


export const ProgressBar: React.FC = () => {
    return (
        <div>
            <span className="flex justify-center mt-10 font-mono text-xl">Total Raised</span>
            <div className="flex justify-center items-center">
                <div className="font-mono text-xl text-white">£0</div>
                <div className="ml-5 mr-5 w-2/12 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-xs font-medium text-black-100 text-center p-0.5 leading-none rounded-full" style={{ width: "100%" }}> 0%</div>
                </div>
                <div className="font-mono text-xl text-white flex">£500 <Icon path={mdiPartyPopper} size={1} className='ml-2' color={'orange'}/></div>
            </div>
        </div>
    )
}