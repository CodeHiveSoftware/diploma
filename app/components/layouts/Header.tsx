'use client';
import React, {useState} from 'react';
import { AiOutlineQrcode } from "react-icons/ai";
import Button from "@/app/components/elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectParkingItems } from "@/app/lib/slices/parkingSlice";
import { selectIsLogged, logout } from "@/app/lib/slices/isLogged";
import Statistic from "@/app/components/elements/Statistic";

type ParkingStatus = {
    reserved: number;
    available: number;
}

const Header = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const dispatch = useDispatch();
    const logged = useSelector(selectIsLogged);
    const parkItems = useSelector(selectParkingItems);

    const fakeData: ParkingStatus = {
        reserved: parkItems.filter(item => item.isReserved).length,
        available: parkItems.filter(item => !item.isReserved).length
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    const handleStatistic = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <header className={`flex relative ${logged ? 'justify-between' : 'justify-center'} items-center px-2 py-2 bg-white/45`}>
            <div className="flex items-center gap-1">
                <AiOutlineQrcode color="red" className="opacity-60" size="40" />
                <h4 className="text-black text-xl">ParkEase</h4>
            </div>
            {logged && (
                <>
                    <div className="flex items-center gap-10">
                        <span className="text-lg text-black font-bold">Reserved: <strong className="text-red text-xl">{fakeData.reserved}</strong></span>
                        <span className="text-lg text-black font-bold">Available: <strong className="text-green-600 text-xl">{fakeData.available}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Button title="Log out" onClick={handleLogout} />
                    <Button title="Statistic" onClick={handleStatistic} />
                    </div>
                    {isModalVisible && <Statistic onClick={handleStatistic}/>}
                </>
            )}
        </header>
    );
};

export default Header;
