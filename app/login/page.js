"use client"

import LoginForm from "@/components/loginForm";

export default function Login() {

    return (
        <div className="w-auto h-96 rounded-lg bg-white z-10 shadow-md p-2">
            <div className="group w-full h-full p-2 rounded-lg flex flex-col items-center justify-evenly bg-slate-100">
                <LoginForm />
            </div>
        </div>
    )
};
