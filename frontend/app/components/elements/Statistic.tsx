'use client';
import React, {useEffect, useState} from 'react';


type StatisticProps = {
    fromTime?: string;
    toTime?: string;
    amount?: number;
    onClick: () => void
}

type CarInfo = {
    id: number;
    plate: string;
    overstayTime: {
        hours: number;
        minutes: number;
    }
    payment: number;
}



const currentTime =  new Date().toLocaleTimeString().substring(0, 5);
const threeHoursAgo = new Date(new Date().getTime() - 3 * 60 * 60 * 1000).toLocaleTimeString().substring(0, 5);

const Statistic = ({fromTime = threeHoursAgo, toTime = currentTime , amount, onClick}: StatisticProps) => {
	const [last3HoursInfo, setLast3HoursInfo] = useState<number>(0);
	const [outdatedInfo, setOutdatedInfo] = useState<CarInfo[]>([]);
	useEffect(() => {
		fetch('http://localhost:8080/api/parking-place/getOverstayedReservations', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data: CarInfo[]) => {
				setOutdatedInfo(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);

	useEffect(() => {
		fetch('http://localhost:8080/api/parking-place/getAllInLast3Hours', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data: number) => {
				setLast3HoursInfo(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}
	, []);
	amount = last3HoursInfo;
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
						<p>Plate: {car.plate}</p>
						<p>Overstay: {car.overstayTime.hours} hours and {car.overstayTime.minutes} minutes</p>
						<p className="ml-auto">Pay: {car.payment.toFixed(1)}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Statistic;
