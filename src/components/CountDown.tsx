import React, { useState, useEffect } from 'react';
import moment from 'moment';

export const CountDown: React.FC = () => {

    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    const [Months, setMonths] = useState(0);

    useEffect(() => {
        const time = moment("2023-09-24").valueOf() - moment(new Date()).valueOf();
        setMinutes(moment.duration(time).minutes());
        setHours(moment.duration(time).hours());
        setDays(moment.duration(time).days());
        setMonths(moment.duration(time).months());
    });

    return (
        <div className="flex justify-center items-center mt-10 mb-10 ">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max max-md:gap-1">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{Months}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Months</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{days}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Days</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{hours}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Hours</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{minutes}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Minutes</span>
                </div>
            </div>
        </div>
    )
}