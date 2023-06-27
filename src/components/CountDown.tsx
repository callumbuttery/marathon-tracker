import React, { useState, useEffect } from 'react';
import moment from 'moment';

export const CountDown: React.FC = () => {

    const [timeRemaining, setTimeRemaining] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const time = moment("2023-09-24").valueOf() - moment(new Date()).valueOf();
        setTimeRemaining({ ...timeRemaining,
            months: moment.duration(time).months(),
            days: moment.duration(time).days(), 
            hours: moment.duration(time).hours(),
            minutes: moment.duration(time).minutes(),
            seconds: moment.duration(time).seconds(),
        })
    });

    return (
        <div className="flex justify-center items-center mt-10 mb-10 ">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max max-md:gap-1">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{timeRemaining.months}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Months</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{timeRemaining.days}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Days</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{timeRemaining.hours}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Hours</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{timeRemaining.minutes}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Minutes</span>
                </div>
                <div className='flex justify-center mt-5 text-6xl font-teko max-md:text-2xl'>:</div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-teko text-8xl text-white max-md:text-2xl">
                        <span>{timeRemaining.seconds}</span>
                    </span>
                    <span className='text-black font-teko max-md:text-sm'>Seconds</span>
                </div>
            </div>
        </div>
    )
}