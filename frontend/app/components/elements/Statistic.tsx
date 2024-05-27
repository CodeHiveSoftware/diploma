import React from 'react';

type StatisticProps = {
    fromTime?: string;
    toTime?: string;
    amount?: number;
    onClick: () => void
}

type CarInfo = {
    id: number;
    carPlate: string;
    overstay: string;
    pay: number;
}

const outdatedInfo: CarInfo[] = [
	{
		carPlate: 'TK1234A',
		id: 1,
		overstay: '1h 30min',
		pay: 1.5
	},
	{
		carPlate: 'TK1235A',
		id: 2,
		overstay: '2h 30min',
		pay: 3
	},
	{
		carPlate: 'TK1236A',
		id: 3,
		overstay: '3h 30min',
		pay: 4.5
	},
	{
		carPlate: 'TK1237A',
		id: 4,
		overstay: '4h 30min',
		pay: 6
	},
	{
		carPlate: 'TK1238A',
		id: 5,
		overstay: '5h 30min',
		pay: 7.5
	},
	{
		carPlate: 'TK1239A',
		id: 6,
		overstay: '6h 30min',
		pay: 9
	},
	{
		carPlate: 'TK1240A',
		id: 7,
		overstay: '7h 30min',
		pay: 10.5
	},
	{
		carPlate: 'TK1241A',
		id: 8,
		overstay: '8h 30min',
		pay: 12
	},
	{
		carPlate: 'TK1242A',
		id: 9,
		overstay: '9h 30min',
		pay: 13.5
	},
	{
		carPlate: 'TK1243A',
		id: 10,
		overstay: '10h 30min',
		pay: 15
	},
	{
		carPlate: 'TK1244A',
		id: 11,
		overstay: '11h 30min',
		pay: 16.5
	},
	{
		carPlate: 'TK1245A',
		id: 12,
		overstay: '12h 30min',
		pay: 18
	},
	{
		carPlate: 'TK1246A',
		id: 13,
		overstay: '13h 30min',
		pay: 19.5
	},
	{
		carPlate: 'TK1247A',
		id: 14,
		overstay: '14h 30min',
		pay: 21
	},
	{
		carPlate: 'TK1248A',
		id: 15,
		overstay: '15h 30min',
		pay: 22.5
	}
];

const currentTime =  new Date().toLocaleTimeString().substring(0, 5);
const threeHoursAgo = new Date(new Date().getTime() - 3 * 60 * 60 * 1000).toLocaleTimeString().substring(0, 5);;

const Statistic = ({fromTime = threeHoursAgo, toTime = currentTime , amount = 20, onClick}: StatisticProps) => {
	return (
		<div className="absolute w-[99vw] transition-all duration-300 flex flex-col gap-4 items-center justify-center top-[100%] h-screen z-10 bg-black/90">
			<div className="relative bg-white p-4 rounded-md">
				<button onClick={onClick} className="absolute top-1 right-2">X</button>
				<h2 className="text-xl text-center font-bold">Statistic</h2>
				<p className="text-lg">From {fromTime} to {toTime} arrived {amount} cars.</p>
			</div>
			<div className="relative flex flex-col gap-1 bg-white p-4 rounded-md">
				<h2 className="text-xl text-center font-bold">Prosrochenia</h2>
				{outdatedInfo.map((car, index) => (
					<div className="bg-black/75 flex rounded-md gap-3 px-1.5 py-1 text-white  w-full items-center">
						<p>Plate: {car.carPlate}</p>
						<p>Overstay: {car.overstay}</p>
						<p className="ml-auto">Pay: {car.pay.toFixed(1)}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Statistic;
