'use client';
import React from 'react';
import { AiOutlineQrcode } from "react-icons/ai";
import Button from "@/app/components/elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectParkingItems } from "@/app/lib/slices/parkingSlice";
import { selectIsLogged, logout } from "@/app/lib/slices/isLogged";

type ParkingStatus = {
    reserved: number;
    available: number;
}

const Header = () => {
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

    return (
        <header className={`flex ${logged ? 'justify-between' : 'justify-center'} items-center px-2 py-2 bg-white/45`}>
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
                    <Button title="Log out" onClick={handleLogout} />
                </>
            )}
        </header>
    );
};

export default Header;
