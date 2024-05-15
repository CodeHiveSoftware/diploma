import React from 'react';
import Button from "@/app/components/elements/Button";

const Authorize = () => {
    return (
        <section className="h-dvh w-full flex flex-col gap-2 items-center justify-center">
            <h2 className="text-4xl text-black">Logowanie do systemu</h2>
            <form className="flex flex-col gap-4 rounded-xl bg-black/80 py-4 px-8">
                <div className="flex gap-2 items-center">
                    <label className="text-white text-3xl" htmlFor="text-white">Login</label>
                    <input type="text" className="text-black rounded-md px-2 py-1" id="login" placeholder="Twój login"/>
                </div>
                <div className="flex gap-2 items-center">
                    <label className="text-white text-3xl" htmlFor="password">Hasło</label>
                    <input type="password" id="password" className="text-black rounded-md px-2 py-1" placeholder="Twoje Hasło"/>
                </div>
                <Button type="submit" title="Potwierdź"/>
            </form>
        </section>
    );
};

export default Authorize;
