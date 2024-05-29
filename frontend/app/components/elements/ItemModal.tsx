import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {reserveParkingItem, selectReservedParkingItems, unreserveParkingItem} from '@/app/lib/slices/parkingSlice';

type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    ticketDetails: {
        id: number;
        randomNumber: number;
        date: string;
        isReserved: boolean;
        carPlate?: string;
    };
};

const ItemModal: React.FC<ModalProps> = ({ isVisible, onClose, ticketDetails }: ModalProps) => {
	const dispatch = useDispatch();
	const [isReserved, setIsReserved] = useState(ticketDetails.isReserved);
	const [carPlate, setCarPlate] = useState('');

	useEffect(() => {
		setIsReserved(ticketDetails.isReserved);
	}, [ticketDetails]);

	const handleReserve = () => {
		const prefixes = ['TK', 'TKI', 'TKA', 'WU', 'KT'];
		const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
		const randomDigits = () => `${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`;
		const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));
		const generatedCarPlate = `${randomPrefix}${randomDigits()}${randomLetter}`;
		fetch('http://localhost:8080/api/parking-place/reserve/' + ticketDetails.id, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				carPlate: generatedCarPlate,
				parkingTicket: randomDigits(),
				parkingStart: ticketDetails.date,
			}),
		}
		)
			.then((response) => {if (response.ok) {
				console.log('Success:', response);
			}
			})
			.then(() =>{
				dispatch(reserveParkingItem(ticketDetails.id));
			}).catch((error) => {
				console.error('Error:', error);
			});
		setCarPlate(generatedCarPlate);
		setIsReserved(true);
	};

	const handleUnreserve = () => {
		fetch('http://localhost:8080/api/parking-place/unreserve/' + ticketDetails.id, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => {if (response.ok) {
				console.log('Success:', response);
			}}).then(() => {
				dispatch(unreserveParkingItem(ticketDetails.id));
			})
			.catch((error) => {
				console.error('Error:', error);
			});
		setCarPlate('');
		setIsReserved(false);



		
		onClose();
	};

	console.log(useSelector(selectReservedParkingItems).length);

	if (!isVisible) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
			<div className="bg-white flex flex-col items-center p-5 rounded-md shadow-md w-80">

				{isReserved ? (
					<>
						<h2 className="text-lg font-bold mb-4">Ticket Details</h2>
						<p>Place ID: {ticketDetails.id}</p>
						<p>Bilet parkingowy: {ticketDetails.randomNumber}</p>
						<p>Wjazd: {ticketDetails.date}</p>
						<p>Car Plate: {carPlate || ticketDetails.carPlate}</p>
						<button className="mt-4 px-4 py-2 bg-black text-white rounded" onClick={handleUnreserve}>
                            Close Reserve
						</button>
					</>
				) : (
					<button className="mt-4 px-4 py-2 bg-green-500 text- rounded" onClick={handleReserve}>
                        Order Place
					</button>
				)}
				<button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>
                    Close
				</button>
			</div>
		</div>
	);
};

export default ItemModal;
