"use client"

import { useState } from "react";
import { DialogBody, DialogHeader, DialogFooter } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";
import Input from "../utils/input";

export default function AddCustomer({ mode, onClose }) {

    const [company, setCompany] = useState(undefined);
    const [companyError, setCompanyError] = useState(undefined);
    const [name, setName] = useState(undefined);
    const [nameError, setNameError] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [phoneError, setPhoneError] = useState(undefined);
    const [address, setAddress] = useState(undefined);

    const onSave = () => {

        if (!company) { setCompanyError('Company Name is required'); return; }
        else setCompanyError(undefined);

        if (!name) { setNameError('Full Name is required'); return; }
        else setNameError(undefined);

        if (!phone) { setPhoneError('Phone Number is required'); return; }
        else if (!(new RegExp('^[0-9]{10}$')).test(phone)) { setPhoneError('Phone number must be 10 digits only'); return; }
        else setPhoneError(undefined);

        console.log(company, " ", name, " ", phone, " ", address);

    }


    return (
        <>
            <DialogHeader className="justify-between">
                <span className="text-2xl font-medium">Add Customer</span>
                <button className="btn btn-ghost btn-sm" onClick={onClose}>
                    <IoClose size={16} />
                </button>
            </DialogHeader>
            <DialogBody className="bg-blue-gray-50">
                <form className="w-full p-1 flex flex-col space-y-2">
                    <Input
                        id="company" lableText="Company Name"
                        type="text" onChange={setCompany}
                        placeholder="Enter Company Name"
                        value={company} error={companyError} />
                    <div className="w-full flex items-center justify-between space-x-1">
                        <div className="w-6/12">
                            <Input
                                id="name" lableText="Full Name"
                                type="text" onChange={setName}
                                placeholder="Enter Full Name"
                                value={name} error={nameError} />
                        </div>
                        <div className="w-6/12">
                            <Input
                                id="phone" lableText="Contact Number"
                                type="text" onChange={setPhone}
                                placeholder="0000000000"
                                value={phone} error={phoneError} />
                        </div>
                    </div>
                    <Input
                        id="address" lableText="Address"
                        type="text" onChange={setAddress}
                        placeholder="Enter Address"
                        value={address} />
                </form>
            </DialogBody>
            <DialogFooter className="justify-end gap-2 border-t border-blue-gray-50">
                <button className="btn btn-sm btn-ghost" onClick={onClose}>Cancel</button>
                <button className="ml-1 btn btn-sm btn-success" onClick={onSave}>Save</button>
            </DialogFooter>
        </>
    )
}