"use client"

import { useState, useLayoutEffect } from "react";
import { DialogBody, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import Input from "../utils/input";

export default function AddQuote({ mode, onClose, article, onAdd }) {

    const [mrp, setMrp] = useState(0);
    const [qty, setQty] = useState(1);
    const [offer, setOffer] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState({});

    useLayoutEffect(() => {
        setSelectedArticle(article);
    }, [article])

    const onSave = () => {

        const addObject = { ...selectedArticle, qty, offer };
        if(mrp !== 0) addObject['mrp'] = mrp;
        onAdd(addObject);

    }


    return (
        <>
            <DialogHeader className="justify-between">
                <span className="text-lg font-medium">{selectedArticle?.articleId} | {selectedArticle?.model}</span>
                <button className="btn btn-ghost btn-sm" onClick={onClose}>
                    <IoClose size={16} />
                </button>
            </DialogHeader>
            <DialogBody className="bg-blue-gray-50">
                <form className="w-full p-1 flex flex-col space-y-2">

                    <Input
                        id="qty" lableText="Quantity"
                        type="text" onChange={setQty}
                        placeholder="MRP"
                        value={qty} />

                    <Input
                        id="mrp" lableText="MRP"
                        type="text" onChange={setMrp}
                        placeholder="MRP"
                        value={selectedArticle ? selectedArticle.mrp : '0'} />

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