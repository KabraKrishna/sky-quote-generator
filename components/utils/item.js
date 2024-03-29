import { UtilContext } from "@/lib/context/utilContext";
import { getItems, searchItem, formatAmount, getImageUrl } from "@/lib/data/items";
import Link from "next/link";
import { useContext } from "react";

export default function Item({ children, icon, value, onItemClick, isHaffele }) {

    const { context } = useContext(UtilContext);

    const handleClick = () => onItemClick(value.articleId);

    return (
        context.isHaffeleActive ? (<>
            <Link href="#" onClick={handleClick} className="w-full" >
                <div className="
                group btn btn-ghost capitalize 
                w-full h-auto py-1 px-2 flex items-center 
                justify-start my-1 hover:bg-indigo-600">
                    <label className="rounded-3xl avatar placeholder bg-primary-focus text-white group-hover:bg-white group-hover:text-indigo-600">
                        <div className="w-8 rounded-md">
                            <img src={getImageUrl(value.articleId)} className="w-11/12" />
                        </div>
                    </label>
                    <div className="flex-1 mx-1 flex flex-col items-start justify-evenly">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-xs text-secondary-focus group-hover:text-white">{value.articleId}</span>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <span
                                className="
                                        text-[10px] font-bold 
                                        text-primary-focus 
                                        group-hover:text-white">
                                {value.model}
                            </span>
                            <span className="text-[10px] text-success group-hover:text-white">&#8377; {formatAmount(value.mrp)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>) : (<>
            <Link href="#" onClick={handleClick} className="w-full" >
                <div className="
                group btn btn-ghost capitalize 
                w-full h-auto py-1 px-2 flex items-center 
                justify-start my-1 hover:bg-indigo-600">
                    <label className="rounded-3xl avatar placeholder bg-primary-focus text-white group-hover:bg-white group-hover:text-indigo-600">
                        <div className="w-8 rounded-md">
                            <img src={getImageUrl(value.articleId)} className="w-11/12" />
                        </div>
                    </label>
                    <div className="flex-1 mx-1 flex flex-col items-start justify-evenly">
                        <div className="w-full flex items-center justify-between">
                            <span className="text-xs text-secondary-focus group-hover:text-white">{value.model}</span>
                        </div>
                        <div className="w-full flex items-center justify-between">
                            <span
                                className="
                                        text-[10px] font-bold 
                                        text-primary-focus 
                                        group-hover:text-white">
                                {value.availableSize}
                            </span>
                        </div>
                    </div>

                </div>
            </Link>
        </>)
    )
}