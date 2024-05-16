import React, { useState } from 'react';
import ParkItem, { ParkItemProps } from "@/app/components/elements/ParkItem";
import Arrow from "@/app/components/elements/Arrow";
import Modal from "@/app/components/elements/ItemModal";
import { useSelector } from "react-redux";
import { selectParkingItems } from "@/app/lib/slices/parkingSlice";

const ParkItemsList = () => {
    const parkItems = useSelector(selectParkingItems);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<{ id: number, randomNumber: number, date: string, isReserved: boolean } | null>(null);

    const handleItemClick = (id: number, isReserved: boolean) => {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const date = new Date().toLocaleString();
        setSelectedItem({ id, randomNumber, date, isReserved });
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
        setSelectedItem(null);
    };

    return (
        <div className="w-full h-full bg-black/75 flex flex-col">
            <div className="flex justify-around items-center">
                <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />
                <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />
                <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />
                <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />
            </div>
            <div className="grid w-full h-full p-5 grid-cols-11 gap-7 place-items-center">
                {parkItems.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <ParkItem {...item} onClick={() => handleItemClick(item.id, item.isReserved)} />
                        {((index + 1) % 6 !== 0) && <Arrow />}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex justify-around items-center">
                <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />
                <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />             <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />             <Arrow direction="flex-row" height="h-[2px]" width="w-8" rotate="rotate(-45deg)" />            </div>
            {selectedItem && (
                <Modal
                    isVisible={isModalVisible}
                    onClose={handleCloseModal}
                    ticketDetails={selectedItem}
                />
            )}
        </div>
    );
};

export default ParkItemsList;
