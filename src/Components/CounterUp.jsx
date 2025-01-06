import React from 'react';
import CountUp from "react-countup";


const CounterUp = () => {
    return (
        <div className="w-full bg-slate-700 text-gray-200 mb-20">
            <div className="grid md:grid-cols-3 gap-10 max-w-[1100px] mx-auto p-12 text-center uppercase">
                <div className="text-3xl py-8">
                    <h1 className="mb-3 font-bold">Clients</h1>
                    <CountUp start={0} end={100} delay={4}>
                        {({ countUpRef }) => (
                            <div className="font-bold">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="text-3xl divide-x py-8" >
                    <h1 className="mb-3 font-bold">Projects</h1>
                    <CountUp start={0} end={100} delay={4}>
                        {({ countUpRef }) => (
                            <div className="font-bold">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className="text-3xl divide-x py-8">
                    <h1 className="mb-3 font-bold">Satisfaction</h1>
                    <CountUp start={0} end={100} delay={4}>
                        {({ countUpRef }) => (
                            <div className="font-bold">
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
            </div>
        </div>
    );
};

export default CounterUp;