import { getCharityData } from '../../lib/CharityHelpers';

import { useEffect, useState } from 'react'


export const ProgressBar: React.FC = () => {

    const [target, setTargetData] = useState<number>()
    const [percentageRaised, setPercentageRaised] = useState<number>()

    useEffect(() => {
        async function fetchData() {
            const response = await getCharityData();

            response.fundraisingTarget ? setTargetData(response.fundraisingTarget) : setTargetData(0);
            response.fundraisingTarget && response.totalRaisedOnline ? setPercentageRaised((response.totalRaisedOnline / response.fundraisingTarget) * 100) : setPercentageRaised(0);
        }

        fetchData();
    }, [])

    return (
        <div className=''>
            <span className="flex justify-center items-center mt-10 font-teko text-xl pt-1 text-white">Total Raised</span>
            <div className="flex justify-center items-center">
                <div className="font-teko text-xl text-white flex">
                    {/* <Icon path={mdiEmoticonSadOutline} size={1} className='mr-2 ml-2' color={'white'} /> */}
                    £0
                </div>
                <div className="ml-5 mr-5 w-5/12 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full font-teko" style={{ width: percentageRaised + "%" }}> {percentageRaised}%</div>
                </div>
                <div className="font-teko text-xl text-white flex">£{target}
                    {/* <Icon path={mdiPartyPopper} size={1} className='ml-2 mr-2' color={'white'} /> */}
                </div>
            </div>
            <span className="flex justify-center items-center font-teko text-xl  text-white">For Cancer Research UK</span>
        </div>
    )
}