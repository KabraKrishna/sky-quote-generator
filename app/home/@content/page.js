"use client"

import Customer from "@/components/addQuote";
import Orders from "@/components/orders";
import { UtilContext } from "@/lib/context/utilContext";
import { useContext, useEffect, useState, useLayoutEffect } from "react";

export default function Content() {

    const { context } = useContext(UtilContext);

    const [isCustomerActive, setCustomerActive] = useState(true);

    useLayoutEffect(() => {
        console.log(context.itemList)
    }, [context]);

    return (
        <div className="w-full h-[30rem] rounded-lg flex flex-col items-center justify-between">
            <Orders />
        </div>
    )
}