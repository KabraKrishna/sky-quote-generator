"use client"

import Orders from "@/components/orders";

export default function Content() {

    return (
        <div className="w-full h-[30rem] rounded-lg flex flex-col items-center justify-between">
            <Orders />
        </div>
    )
}