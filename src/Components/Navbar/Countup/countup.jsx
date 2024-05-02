import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AboutCountUp() {
    const { ref, inView } = useInView();
    const [startCounting, setStartCounting] = useState(false);
    const countedRef = useRef(false);

    useEffect(() => {
        if (inView && !countedRef.current) {
            setStartCounting(true);
            countedRef.current = true;
        } else if (!inView && countedRef.current) {
            // Reset startCounting when the component goes out of view
            setStartCounting(false);
            countedRef.current = false;
        }
    }, [inView]);

    return (
        <>
            <div ref={ref} className='text-center bg-[#006600] p-4 mt-3 lg:w-[60em]'>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h2 className="text-3xl font-bold text-white">
                            {startCounting && (
                                <CountUp
                                    start={0}
                                    end={5000}
                                    duration={5}
                                />
                            )}
                            +
                        </h2>
                        <p className="py-2 italic font-medium tracking-wider text-[#FFFFFF]">Partners</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h2 className="text-3xl font-bold text-white">
                        {startCounting && (
                            <CountUp
                                start={0}
                                end={41000}
                                duration={5}
                            />
                        )}
                            {" "}
                            s/m
                        </h2>
                        <p className="py-2 italic font-medium tracking-wider text-[#FFFFFF]">Covered Area</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h2 className="text-3xl font-bold text-white">
                        {startCounting && (
                            <CountUp
                                start={0}
                                end={60}
                                duration={5}
                            />                  
                        )}
                            +
                        </h2>
                        <p className="py-2 italic font-medium tracking-wider text-[#FFFFFF]">Countries World Wide Selling</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <h2 className="text-3xl font-bold text-white">
                        {startCounting && (
                            <CountUp
                                start={0}
                                end={24}
                                duration={5}
                            />
                        )}
                            {" "}
                            +
                        </h2>
                        <p className="py-2 italic font-medium tracking-wider text-[#FFFFFF]">Years Experience</p>
                    </div>
                </div>
            </div>

        </>
    )
}