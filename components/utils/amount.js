"use client"
import { LiaRupeeSignSolid } from "react-icons/lia";

export default function Amount({ isDisabled, value }) {

    return (
        <>
            <div className="
                     bg-gray-400/50 rounded-r-md 
                    absolute right-0
                    w-auto flex-col-center shadow-sm">
                <span className="text-sm text-gray-900 p-1">
                    <LiaRupeeSignSolid size={24} />
                </span>
            </div>

            <input
                id="amount"
                type="text"
                placeholder="0.00"
                disabled={isDisabled}
                className="
                    block w-full rounded-md border-0
                    pl-2 pr-9 py-1.5 text-gray-900 shadow-sm
                     placeholder:text-gray-400 focus:outline-none
                     disabled:bg-white
                "
            />
        </>
    )
}