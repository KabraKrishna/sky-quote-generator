"use client"

import { useState, useLayoutEffect, useEffect } from "react";
import { DialogBody, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import Input from "../utils/input";
import { getImageUrl } from "@/lib/data/items";

export default function AddQuote({ mode, onClose, article, onAdd }) {

    const [mrp, setMrp] = useState(0);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState(0);
    const [offer, setOffer] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState({});

    useLayoutEffect(() => {
        setMrp(article.mrp);
        setSelectedArticle(article);
    }, [article])

    useEffect(() => {

        if(discount) {
            addDiscount()
        }
    },[discount])

    const onSave = () => {

        const addObject = {
            ...selectedArticle,
            mrp: +mrp,
            qty: +qty,
            offer: +offer,
            size: +size
        };
        onAdd(addObject);

    }

    const addDiscount = () => {

        if (!mrp) return;

        let parsedMrp = parseInt(mrp)

        let calculatedPrice = parsedMrp - ((parsedMrp * parseInt(discount)) / 100);

        setOffer(Math.round(calculatedPrice))

    }


    return (
        <>
            <DialogHeader className="justify-between">
                <div className="flex items-center justify-evenly">
                    <div className="w-8 rounded-md mr-1">
                        <img src={getImageUrl(article.articleId)} className="w-11/12 rounded-md" />
                    </div>
                    <span className="text-lg font-medium">{article.articleId.includes("H.") ? '' : article.articleId + ' | '}{selectedArticle?.model}</span>
                </div>
                <button className="btn btn-ghost btn-sm" onClick={onClose}>
                    <IoClose size={16} />
                </button>
            </DialogHeader>
            <DialogBody className="bg-blue-gray-50">
                <form className="w-full p-1 flex flex-col space-y-2">

                    <div className="w-full flex items-center justify-between">
                        <Input
                            id="qty" lableText="Quantity"
                            type="text" onChange={setQty}
                            placeholder="quantity"
                            value={qty} />

                        <Input
                            id="size" lableText="Size"
                            type="text" onChange={setSize}
                            placeholder="size"
                            value={size} />
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <Input
                            id="mrp" lableText="MRP"
                            type="text" onChange={setMrp}
                            placeholder="MRP"
                            value={mrp} />

                        <Input
                            id="discount" lableText="Discount"
                            type="text" onChange={setDiscount}
                            placeholder="discount(%)"
                            value={discount} />
                    </div>

                    <Input
                        id="offer" lableText="Retail Offer"
                        type="text" onChange={setOffer}
                        placeholder="Retail Offer"
                        value={offer} />
                </form>
            </DialogBody>
            <DialogFooter className="justify-end gap-2 border-t border-blue-gray-50">
                <button className="btn btn-sm btn-ghost" onClick={onClose}>Cancel</button>
                <button className="ml-1 btn btn-sm btn-success" onClick={onSave}>Save</button>
            </DialogFooter>
        </>
    )
}