import React from 'react';

type StatisticProps = {
    fromTime?: string;
    toTime?: string;
    amount?: number;
    onClick: () => void
}


const Statistic = ({fromTime = '16:00', toTime = '19:00', amount = 20, onClick}: StatisticProps) => {
    return (
        <div className="absolute w-[99vw] transition-all duration-300 flex items-center justify-center top-[100%] h-screen z-10 bg-black/90">
            <div className="relative bg-white p-4 rounded-md">
                <button onClick={onClick} className="absolute top-1 right-2">X</button>
                <h2 className="text-xl text-center">Statistic</h2>
                <p className="text-lg">From {fromTime} to {toTime} arrived {amount} cars.</p>
            </div>
        </div>
    );
};

export default Statistic;
