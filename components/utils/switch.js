"use client"
import { useRef, useState } from "react"

export default function Switch({ onToggle }) {

    const screens = ["CUSTOMERS", "ORDERS"];
    const toggleRef = useRef(undefined);

    const [toggleState, setToggleState] = useState(true);

    const handleToggle = () => {
        setToggleState((current) => !current);
        onToggle(toggleRef.current.checked);
    }

    return (
        <div className="relative w-56 flex items-center justify-between p-1 bg-white rounded-md">
            <input
                checked={toggleState}
                ref={toggleRef}
                onClick={handleToggle}
                onChange={() => {}}
                type="checkbox"
                className="z-20 absolute left-1/2 -translate-x-1/2 w-56 appearance-none h-full peer rounded-md" />
            <div
                className="
                    z-10 absolute w-28 bg-indigo-500 
                    rounded-md flex-col-center py-1 px-2 
                    duration-300 ease-in-out 
                    peer-checked:translate-x-[6.5rem]">
                <span className="text-sm text-white font-semibold">{screens[toggleState ? 0 : 1]}</span>
            </div>
            <div className="w-28 flex-col-center py-1 invisible peer-checked:visible duration-300 ease-in-out">
                <span className="text-sm text-indigo-500">{screens[1]}</span>
            </div>
            <div className="w-28 flex-col-center py-1 visible peer-checked:invisible duration-300 ease-in-out">
                <span className="text-sm text-indigo-500">{screens[0]}</span>
            </div>
        </div>
    )
}