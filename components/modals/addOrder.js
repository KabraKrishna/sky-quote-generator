"use client"
import { DialogBody, DialogHeader, DialogFooter, Typography, Button, IconButton } from "@material-tailwind/react";
import { IoClose, IoCreate } from "react-icons/io5";
import Input from "../utils/input";
import SearchDropDown from "../utils/searchDropdown";
import Amount from "../utils/amount";

export default function AddOrder({ mode, onClose }) {

    const TABLE_HEAD = ["SR NO.", "PRODUCT", "MRP", "DIS(%)", "QTY", "AMOUNT", "ACTION"];

    const handleInputChange = (val) => {
        console.log("val: ", val);
    }

    return (
        <>
            <DialogHeader className="justify-between">
                <span className="text-2xl font-medium">Add Order</span>
                <button className="btn btn-ghost btn-sm" onClick={onClose}>
                    <IoClose size={16} />
                </button>
            </DialogHeader>
            <DialogBody className="bg-blue-gray-50">
                <div className="w-full flex flex-col">
                    <form className="w-full p-1 flex flex-col space-y-2">
                        <div className="w-full flex items-center justify-between space-x-1">
                            <div className="w-6/12">
                                <SearchDropDown />
                            </div>
                            <div className="w-3/12">
                                <Input id="date" lableText="Date" type="date" />
                            </div>
                            <div className="w-3/12">
                                <Input id="bill" lableText="Bill #" type="text" value="10001" disabled={true} />
                            </div>
                        </div>
                    </form>
                    <div className="
                        relative w-full max-h-[15rem] no-scrollbar 
                        overflow-y-scroll mt-2 px-1">
                        <div className="w-full bg-blue-gray-50 sticky top-0 z-10 pb-1">
                            <div
                                className="
                                w-full flex items-center z-10
                                justify-between text-sm py-3 px-2 rounded-md
                                font-medium text-white bg-theme-gradient space-x-1">
                                <div className="w-1/12 flex items-center justify-start">Sr No.</div>
                                <div className="w-5/12 flex-col-center">Product</div>
                                <div className="w-1/12 flex-col-center">MRP</div>
                                <div className="w-1/12 flex-col-center">DIS.</div>
                                <div className="w-1/12 flex-col-center">QTY.</div>
                                <div className="w-2/12 flex-col-center">AMOUNT</div>
                                <div className="w-1/12 flex-col-center">ACTION</div>
                            </div>
                            <div
                                className="
                                w-full flex items-center space-x-1
                                justify-between text-sm rounded-md my-2">
                                <div className="w-1/12"></div>
                                <div className="w-5/12 flex-col-center">
                                    <input
                                        id="product"
                                        type="text"
                                        required
                                        onChange={handleInputChange}
                                        placeholder="Product"
                                        className="
                                        block w-full rounded-md border-0
                                        px-2 py-1.5 text-gray-900 shadow-sm
                                      placeholder:text-gray-400 focus:outline-none
                                    "
                                    />
                                </div>
                                <div className="w-1/12 flex-col-center">
                                    <input
                                        id="mrp"
                                        type="text"
                                        required
                                        onChange={handleInputChange}
                                        placeholder="0"
                                        className="
                                        block w-full rounded-md border-0
                                        px-2 py-1.5 text-gray-900 shadow-sm
                                        placeholder:text-gray-400 focus:outline-none
                                    "
                                    />
                                </div>
                                <div className="w-1/12 flex-col-center">
                                    <input
                                        id="discount"
                                        type="number"
                                        min={0}
                                        required
                                        onChange={handleInputChange}
                                        placeholder="0"
                                        className="
                                        block w-full rounded-md border-0
                                        px-2 py-1.5 text-gray-900 shadow-sm
                                        placeholder:text-gray-400 focus:outline-none
                                    "
                                    />
                                </div>
                                <div className="w-1/12 flex-col-center">
                                    <input
                                        id="quantity"
                                        type="number"
                                        required
                                        onChange={handleInputChange}
                                        placeholder="0"
                                        className="
                                        block w-full rounded-md border-0
                                        px-2 py-1.5 text-gray-900 shadow-sm
                                        placeholder:text-gray-400 focus:outline-none
                                    "
                                    />
                                </div>
                                <div className="w-2/12 flex-col-center relative">
                                    <Amount isDisabled={false} value={0} />
                                </div>
                                <div className="w-1/12 flex-col-center">
                                    <Button size="sm" className="w-full flex-col-center" color="indigo">ADD</Button>
                                </div>
                            </div>
                        </div>

                        <div className="w-full divide-y">
                            {
                                Array.from({ length: 10 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className="dc-item
                                w-full flex items-center 
                                justify-between text-sm py-1 px-2 mb-1 border-blue-gray-100
                                text-blue-600">
                                        <div className="w-1/12 flex-col-center">{index + 1}</div>
                                        <div className="w-5/12 flex-col-center">Product {index + 1}</div>
                                        <div className="w-1/12 flex-col-center">{500 * (index + 1)}</div>
                                        <div className="w-1/12 flex-col-center">{2 * (index + 1)}</div>
                                        <div className="w-1/12 flex-col-center">{index + 1 * 2}</div>
                                        <div className="w-2/12 flex-col-center">2,000</div>
                                        <div className="w-1/12 flex-center">
                                            <IconButton size="sm" className="flex-col-center rounded-full" variant="text" color="blue">
                                                <IoCreate size={18} />
                                            </IconButton>
                                            <IconButton size="sm" className="flex-col-center rounded-full" variant="text" color="red">
                                                <IoClose size={18} />
                                            </IconButton>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div
                            className="
                                w-full flex items-center z-10
                                justify-between text-sm py-1 px-2 rounded-md
                                font-medium text-white bg-theme-gradient space-x-1">
                            <div className="w-8/12 flex items-center justify-start"></div>
                            <div className="w-1/12 flex-col-center font-bold">TOTAL</div>
                            <div className="w-2/12 flex-col-center relative">
                                <Amount isDisabled={true} value={0} />
                            </div>
                            <div className="flex-auto flex-col-center"></div>
                        </div>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter className="justify-end gap-2 border-t border-blue-gray-50">
                <Button className="w-auto h-9 flex-col-center" variant="text" color="blue-gray" onClick={onClose}>Cancel</Button>
                <Button className="w-auto h-9 flex-col-center" color="green">Save</Button>
            </DialogFooter>
        </>
    )

}