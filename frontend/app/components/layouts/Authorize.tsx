import React, { ChangeEvent, useState } from 'react';
import Button from "@/app/components/elements/Button";
import { useDispatch } from "react-redux";
import { login as logIn } from "@/app/lib/slices/isLogged";

const Authorize = () => {
    const [credentials, setCredentials] = useState<{ log: string, password: string }>({ log: '', password: '' });
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { log, password } = credentials;
        if (log === 'admin' && password === 'admin5454park') {
            dispatch(logIn());
            // Redirect or handle successful login
            console.log('Logged in successfully');
        } else {
            alert("incorrect data");
            setCredentials({ log: '', password: '' });
        }
    };

    return (
        <section className="h-dvh w-full flex flex-col gap-2 items-center justify-center">
            <h2 className="text-4xl text-black">Logowanie do systemu</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-xl bg-black/80 py-4 px-8">
                <div className="flex gap-2 items-center">
                    <label className="text-white text-3xl" htmlFor="log">Login</label>
                    <input
                        type="text"
                        id="log"
                        name="log"
                        className="text-black rounded-md px-2 py-1"
                        placeholder="Twój login"
                        value={credentials.log}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <label className="text-white text-3xl" htmlFor="password">Hasło</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="text-black rounded-md px-2 py-1"
                        placeholder="Twoje Hasło"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
                <Button type="submit" title="Potwierdź"/>
            </form>
        </section>
    );
};

export default Authorize;
