import React from 'react';

export type ParkItemProps = {
    id: number;
    isReserved: boolean;
};

const ParkItem = ({ id, isReserved }: ParkItemProps) => {
    return (
        <div className={`border-2 hover:scale-125 transition-all duration-150 w-fit rounded-md p-10 cursor-pointer h-fit flex items-center justify-center text-primary ${isReserved ? 'border-red' : 'border-green-400'}`}>
            {id}
        </div>
    );
};

export default ParkItem;
