import React from 'react';

export type ParkItemProps = {
    id: number;
    isReserved: boolean;
    onClick: () => void;
};

const ParkItem = ({ id, isReserved, onClick }: ParkItemProps) => {
	return (
		<div
			onClick={onClick}
			className={`relative park-item border-2 hover:scale-125 transition-all duration-150 w-fit rounded-md p-10 cursor-pointer h-fit flex items-center justify-center text-primary ${isReserved ? 'border-red' : 'border-green-400'}`}
		>
			{id}
		</div>
	);
};

export default ParkItem;
