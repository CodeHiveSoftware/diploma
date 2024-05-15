'use client'
import React from 'react';
import ParkItem, {ParkItemProps} from "@/app/components/elements/ParkItem";
import {useSelector, useDispatch} from "react-redux";
import {selectParkingItems} from "@/app/lib/slices/parkingSlice";

const parkItems: ParkItemProps[] = [

]

const ParkItemsList = () => {
    const dispatch = useDispatch();
    const parkItems = useSelector(selectParkingItems);


    return (
        <div className="grid w-full h-full p-5 grid-cols-6 gap-7 place-items-center bg-black/75">
            {parkItems.map(item => <ParkItem key={item.id} {...item} />)}
        </div>
    );
};

export default ParkItemsList;
