import { IoCall, IoPerson, IoPrint, IoDocument, IoClose, IoAddCircle } from "react-icons/io5";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Input from "./utils/input";
import { UtilContext } from "@/lib/context/utilContext";
import { Dialog, DialogBody, IconButton } from "@material-tailwind/react";
import { formatAmount, getImageUrl } from "@/lib/data/items";
import moment from "moment";


export default function Orders(props) {

    const { context, removeSelectedItem, clearContext } = useContext(UtilContext);

    const billRef = useRef(null);
    const [isPrintPreview, setIsPrintPreview] = useState(false);
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [quoteDate, setQuoteDate] = useState("");
    const [validity, setValidity] = useState("");
    const [attendedBy, setAttendedBy] = useState('');
    const [quoteItems, setQuoteItems] = useState([]);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(undefined);
    const [isCash, setIsCash] = useState(0);
    const [discount, setDiscount] = useState('');

    useLayoutEffect(() => {
        setQuoteItems(context.itemList)
    }, [context])

    const onPrintPreview = () => setIsPrintPreview(true);
    const onCancel = () => setIsPrintPreview(false);

    const openDrawer = () => setDrawerOpen(true);

    const closeDrawer = (isDelete) => {

        if (isDelete && deleteItemId) {
            removeSelectedItem(deleteItemId);
        }
        setDeleteItemId(undefined);
        setDrawerOpen(false);
    }

    const inputStyle = `block w-full rounded-md
    px-2 py-1.5 bg-blue-gray-50 text-black
    placeholder:text-gray-500 focus:outline-none
    placeholder:text-sm`;

    const labelStyle = `block text-sm font-medium leading-6 text-black`;

    const pageStyle = `
        @page {
            size: 210mm 297mm;
        }

        @media all {
            .pagebreak {
                display: none;
            }
        }

        @media print {

            .dc-container {
                height: 297mm;
            }

            .dc-footer-note {
                margin-top: 20mm;
            }

            .dc-item:nth-child(9n) {
                page-break-after: always;
            }

            .dc-item:nth-child(9n+1) {
                margin-top: 10mm;
            }
            
        }`;

    const handlePrint = useReactToPrint({
        content: () => billRef.current,
        pageStyle: pageStyle
    })

    const handleDrop = (e) => {
        setIsCash(e.target.value);
    }

    const clearScreen = () => {

        setCompany('');
        setAttendedBy('');
        setPhone('');
        setQuoteDate('');
        setValidity('');
        setIsCash(true);
        setDiscount('');
        clearContext();
        setQuoteItems([]);

        setIsPrintPreview(false);

    }

    const removeItem = (id) => {
        setDeleteItemId(id);
        openDrawer();
    }

    const getPrintPreview = () => {

        const totals = { mrp: 0, qty: 0, offer: 0, discount: 0 }

        quoteItems.forEach((item) => {
            totals.mrp += +item.mrp;
            totals.qty += +item.qty;
            totals.offer += (+item.qty * +item.offer)
        })

        if (isCash === "0") totals.discount = +discount
        else totals.discount = (totals.offer * (+discount) / 100)

        return (<>
            <div className="w-full h-[27rem] bg-gray-200 rounded-b-lg flex flex-col items-center justify-start no-scrollbar overflow-y-scroll p-2 mb-1">
                {/* Bill Layout */}
                <div ref={billRef} className="dc-container w-full h-auto bg-white flex flex-col items-center justify-between p-2">

                    {/* Header */}

                    <div className="dc-header w-full flex-col-center py-2 border-b border-black">
                        <div className="w-full flex items-center justify-between">
                            
                            <div className="w-[100px] flex-col-center">
                                <img alt="SS_LOGO" src='/hindware-logo-1.png' className="w-[70px] h-[70px]"/>
                            </div>
                            <span className="ml-4 text-5xl font-serif font-extrabold text-black">Sky Studio</span>
                            <div className="w-[100px] flex-col-center mr-3">
                                <img alt="SS_LOGO" src='/haffele-logo-1.png' className="w-[100px] h-[70px]"/>
                            </div>
                        </div>
                        <span className="mt-4 mb-2 text-xs text-black">
                            Shop No. 13/14, Chetan Trade Center Opp. SFS School, Ch. Sambhajinagar - 431001
                        </span>
                        <div className="w-full flex flex-row items-center justify-center divide-x">
                            <span className="text-xs text-black mx-2">Mob.
                                <span className="text-black font-medium ml-1">9767448038</span>
                            </span>
                            <span className="text-xs text-black pl-2 border-indigo-900">EMAIL.
                                <span className="text-black font-medium ml-1">shravankabra14@gmail.com</span>
                            </span>
                        </div>
                    </div>

                    {/* Customer Details */}

                    <div className="dc-customer w-full flex items-center justify-between divide-x px-4 py-1 text-black text-xs">

                        <div className="w-auto flex-1 flex-col-center">
                            <div className="w-full flex flex-row items-center justify-start">
                                <div className="w-6 h-6 flex-center">
                                    <IoPerson size={12} />
                                </div>
                                <span className="ml-1">{company}</span>
                            </div>

                            <div className="w-full flex flex-row items-center justify-start">
                                <div className="w-6 h-6 flex-center">
                                    <IoCall size={12} />
                                </div>
                                <span className="ml-1">{phone}</span>
                            </div>
                        </div>
                        <div className="min-w-[8rem] flex-col-center text-xs border-indigo-900">
                            <div className="w-full flex items-center justify-between">
                                <span className="mx-2">Date:</span>
                                <span className="font-medium ml-1">{moment(quoteDate).format('DD/MM/yyyy')}</span>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <span className="mx-2">Attn :</span>
                                <span className="font-medium ml-1">{attendedBy}</span>
                            </div>
                        </div>
                    </div>

                    {/* bill details */}
                    <div className="dc-content w-full flex flex-col items-center px-4 py-2">

                        <div
                            className="
                                w-full flex items-center 
                                justify-between text-xs px-2 py-1 rounded-lg
                                font-bold text-black bg-blue-gray-100/50">
                            <div className="w-1 flex-col-center">#</div>
                            <div className="w-2/12 flex-col-center">IMAGE</div>
                            <div className="w-6/12 flex-col-center">DESC</div>
                            <div className="w-1/12 flex-col-center">MRP</div>
                            <div className="w-1/12 flex-col-center">QTY.</div>
                            <div className="w-1/12 flex-col-center">OFFER</div>
                        </div>

                        {
                            quoteItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="dc-item border-b
                                            w-full flex items-center 
                                            justify-between px-2 mt-1
                                          text-black">
                                    <div className="w-1 flex-col-center">{index + 1}</div>
                                    <div className="w-2/12 flex-col-center">
                                        <img src={getImageUrl(item.articleId)} className="w-10/12" />
                                    </div>
                                    <div className="w-6/12 flex-col items-center justify-start">
                                        <div>
                                            {
                                                item.articleId.includes("H.") ? (<>
                                                    <span className="font-bold text-xs">Model:</span>
                                                    <span className="font-normal text-xs ml-1">{item.model}</span>
                                                </>) : (<>
                                                    <span className="font-bold text-xs">ArticleID:</span>
                                                    <span className="font-normal text-xs ml-1">{item.articleId}</span>
                                                </>)
                                            }
                                        </div>
                                        <div>
                                            {
                                                item.articleId.includes("H.") ? (<>
                                                    <span className="font-bold text-xs">Size (mm):</span>
                                                    <span className="font-normal text-xs ml-1">{item.size}</span>
                                                </>) : (<>
                                                    <span className="font-bold text-xs">Model:</span>
                                                    <span className="font-normal text-xs ml-1">{item.model}</span>
                                                </>)
                                            }
                                        </div>
                                        <div>
                                            <p className="font-light text-[9px] text-justify leading-3">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="w-1/12 flex-col-center text-xs">{formatAmount(item.mrp)}</div>
                                    <div className="w-1/12 flex-col-center text-xs">{item.qty}</div>
                                    <div className="w-1/12 flex-col-center text-xs">{formatAmount(item.offer)}</div>
                                </div>
                            ))
                        }

                        <div
                            className="
                                dc-item w-full flex items-center mt-1 
                                justify-between text-xs p-2 rounded-lg
                                font-bold text-black bg-blue-gray-100/50 border border-black">
                            <div className="w-1 flex-col-center"></div>
                            <div className="w-2/12 flex-col-center"></div>
                            <div className="w-6/12 flex-col-center">SUB-TOTAL</div>
                            <div className="w-1/12 flex-col-center">{formatAmount(totals.mrp)}</div>
                            <div className="w-1/12 flex-col-center">{formatAmount(totals.qty)}</div>
                            <div className="w-1/12 flex-col-center">{formatAmount(totals.offer)}</div>
                        </div>

                        <div
                            className="
                                dc-item w-full flex items-center mt-1
                                justify-between text-xs p-2 rounded-lg
                                font-bold text-black bg-blue-gray-100/50 border border-black">
                            <div className="w-1 flex-col-center"></div>
                            <div className="w-2/12 flex-col-center"></div>
                            <div className="w-6/12 flex-col-center">DISCOUNT</div>
                            <div className="w-1/12 flex-col-center"></div>
                            <div className="w-1/12 flex-col-center">{isCash === "0" ? '' : '(' + discount + '% )'}</div>
                            <div className="w-1/12 flex-col-center">{formatAmount(totals.discount)}</div>
                        </div>

                        <div
                            className="
                                dc-item w-full flex items-center mt-1 
                                justify-between text-xs p-2 rounded-lg
                                font-bold text-black bg-blue-gray-100/50 border border-black">
                            <div className="w-1 flex-col-center"></div>
                            <div className="w-2/12 flex-col-center"></div>
                            <div className="w-6/12 flex-col-center">TOTAL</div>
                            <div className="w-1/12 flex-col-center"></div>
                            <div className="w-1/12 flex-col-center"></div>
                            <div className="w-1/12 flex-col-center">{formatAmount(totals.offer - totals.discount)}</div>
                        </div>

                    </div>

                    {/* Footer  */}

                    <div className="dc-item dc-footer-note px-5 my-2 w-full flex flex-col items-start text-black">
                        <span className="text-xs font-medium ml-1">TERMS & CONDITIONS</span>
                        <div className="w-full flex flex-col items-start justify-evenly text-xs bg-blue-gray-50 rounded-lg">
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="mx-1">1.</span>
                                <span className="mx-1">100% Payment in advance is required before the shipment of any Products by Seller.</span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="mx-1">2.</span>
                                <span className="mx-1">Without 100% payment order pricing will not be Valid Till
                                    <span className="italic font-semibold text-green-500 ml-1">
                                        {validity ? moment(validity).format('ll') : moment(quoteDate).add(15, 'days').format('ll')}
                                    </span>
                                </span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="mx-1">3.</span>
                                <span className="mx-1">Order to be placed on Hafele Dealer.</span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="mx-1">4.</span>
                                <span className="mx-1">Delivery Schedule: Charges to be paid by Client depending on location.</span>
                            </div>
                            <div className="w-full px-2 my-1 flex items-center justify-start text-red-500">
                                <span className="mx-1">5.</span>
                                <span className="mx-1">No Refund, No Return and No Exchange Policy.</span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="dc-item dc-footer-details  px-5 my-2 w-full flex flex-col items-start text-black">
                        <div className="w-full flex flex-col items-start justify-evenly text-xs rounded-lg">
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">Address</span>
                                <span className="w-9/12 py-3 bg-blue-gray-50 rounded-lg"></span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">Line 1</span>
                                <span className="w-9/12 py-3 bg-blue-gray-50 rounded-lg"></span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">Line 2</span>
                                <span className="w-9/12 py-3 bg-blue-gray-50 rounded-lg"></span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">GST No</span>
                                <span className="w-9/12 py-3 bg-blue-gray-50 rounded-lg"></span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">Payment Mode</span>
                                <span className="w-9/12 py-3 bg-blue-gray-50 rounded-lg"></span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">Remark</span>
                                <span className="w-9/12 py-3 bg-blue-gray-50 rounded-lg"></span>
                            </div>
                            <div className="w-full px-2 mt-1 flex items-center justify-start">
                                <span className="w-3/12">Attended By</span>
                                <span className="w-9/12 py-1 px-2 bg-blue-gray-50 rounded-lg font-semibold">{attendedBy}</span>
                            </div>
                        </div>
                    </div> */}

                    <div className="dc-item dc-footer-sign  w-full px-4 py-2 text-black flex flex-row items-center justify-between border-t border-black">
                        <div className="flex flex-row items-center justify-between">

                            <div className="flex-col-center border-r pr-2 mr-2 border-black text-[9px]">
                                <img src="upi_qr_code.jpg" className="w-[5rem]" />
                                <span>UPI QR Code</span>
                            </div>
                            <div className="flex items-center justify-between w-[210px] text-xs">

                                <div className="flex flex-col items-start justify-center">
                                    <span>PAY To</span>
                                    <span>Bank Name</span>
                                    <span>A/C No</span>
                                    <span>IFSC</span>
                                    <span>Branch</span>
                                </div>

                                <div className="flex-col-center">
                                    <span>:</span>
                                    <span>:</span>
                                    <span>:</span>
                                    <span>:</span>
                                    <span>:</span>
                                </div>

                                <div className="flex flex-col items-start justify-center">
                                    <span>SKY STUDIO</span>
                                    <span>AU Small Finance</span>
                                    <span>2221235745543179</span>
                                    <span>AUBL0002357</span>
                                    <span>Ch. SambhajiNagar</span>
                                </div>

                                {/* <div className="flex items-center justify-between w-[250px]">
                                    <span>PAY To:</span>
                                    <span>SKY STUDIO</span>
                                </div>

                                <div className="flex items-center justify-between w-[250px]">
                                    <span>Bank Name:</span>
                                    <span>AU Small Finance</span>
                                </div>

                                <div className="flex items-center justify-between w-[250px]">
                                    <span>A/C NO:</span>
                                    <span>2221235745543179</span>
                                </div>

                                <div className="flex items-center justify-between w-[250px]">
                                    <span>IFSC:</span>
                                    <span>AUBL0002357</span>
                                </div>

                                <div className="flex items-center justify-between w-[250px]">
                                    <span>Branch:</span>
                                    <span>Ch. SambhajiNagar</span>
                                </div> */}
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-lg font-medium">For Sky Studio</span>
                            <span className="text-sx mt-10">Signature</span>
                        </div>

                    </div>

                </div>

            </div>
        </>)
    }

    return (
        <>
            <div className="w-full h-11 rounded-t-lg bg-theme-gradient flex items-center justify-between px-2">

                <button type="button" onClick={clearScreen}
                    className="
                                    ml-2
                                    text-gray-900 
                                    bg-gray-100
                                    hover:bg-transparent
                                    hover:border
                                    hover:border-white/80
                                    hover:text-white
                                    font-medium 
                                    rounded-3xl text-sm 
                                    px-2 py-1 text-center 
                                    inline-flex items-center 
                                    me-1">
                    <IoAddCircle size={18} className="mr-1" />
                    Create New Quote
                </button>

                <div className="w-auto px-1 h-8 flex items-center justify-between space-x-1">
                    {
                        isPrintPreview ?
                            <>
                                <button type="button" onClick={handlePrint}
                                    className="
                                    text-gray-900 
                                    bg-gray-100
                                    hover:bg-transparent
                                    hover:border
                                    hover:border-white/80
                                    hover:text-white
                                    font-medium 
                                    rounded-3xl text-sm 
                                    px-2 py-1 text-center 
                                    inline-flex items-center 
                                    me-1">
                                    <IoPrint size={18} className="mr-1" />
                                    Print
                                </button>
                                <button type="button" onClick={onCancel}
                                    className="
                                    ml-2
                                    text-gray-900 
                                    bg-gray-100
                                    hover:bg-transparent
                                    hover:border
                                    hover:border-white/80
                                    hover:text-white
                                    font-medium 
                                    rounded-3xl text-sm 
                                    px-2 py-1 text-center 
                                    inline-flex items-center 
                                    me-1">
                                    <IoClose size={18} className="mr-1" />
                                    Cancel
                                </button>
                            </> :
                            <>
                                <button type="button" onClick={onPrintPreview}
                                    className="
                                    bg-gray-100
                                    text-gray-900
                                    hover:bg-transparent
                                    hover:border
                                    hover:border-white/80
                                    hover:text-white
                                    font-medium 
                                    rounded-3xl text-sm 
                                    px-2 py-1 text-center 
                                    inline-flex items-center 
                                    me-1">
                                    <IoDocument size={18} className="mr-1" />
                                    Print Preview
                                </button>
                            </>
                    }
                </div>
            </div>

            {
                isPrintPreview ? getPrintPreview() :
                    <div className="w-full h-[27rem] bg-gray-200 rounded-b-lg flex flex-col items-center justify-start no-scrollbar overflow-y-scroll p-2 mb-1">
                        {/* Bill Layout */}
                        <div className="dc-container w-full h-auto bg-white flex flex-col items-center justify-between p-2">

                            {/* Customer Details */}

                            <div className="dc-customer w-full flex items-center justify-between divide-x px-6 py-2 text-black">
                                <div className="w-full flex items-center justify-between space-x-1">
                                    <div className="w-4/12">
                                        <Input
                                            id="company" lableText="Client Name"
                                            type="text" onChange={setCompany}
                                            placeholder="Enter Client Name"
                                            inputStyle={inputStyle}
                                            labelStyle={labelStyle}
                                            value={company} />
                                    </div>
                                    <div className="w-4/12">
                                        <Input
                                            id="phone" lableText="Contact Number"
                                            type="text" onChange={setPhone}
                                            placeholder="0000000000"
                                            inputStyle={inputStyle}
                                            labelStyle={labelStyle}
                                            value={phone} />
                                    </div>
                                    <div className="w-4/12">
                                        <Input
                                            id="attnd" lableText="Attended By"
                                            type="text" onChange={setAttendedBy}
                                            placeholder="Attended by"
                                            inputStyle={inputStyle}
                                            labelStyle={labelStyle}
                                            value={attendedBy} />
                                    </div>
                                </div>
                            </div>

                            <div className="dc-customer w-full flex items-center justify-between divide-x px-6 py-2 text-black">
                                <div className="w-full flex items-center justify-between space-x-1">
                                    <div className="w-3/12">
                                        <Input
                                            id="cDate" lableText="Date"
                                            type="date" onChange={setQuoteDate}
                                            placeholder="Quote Date"
                                            inputStyle={inputStyle}
                                            labelStyle={labelStyle}
                                            value={quoteDate} />
                                    </div>
                                    <div className="w-3/12">
                                        <Input
                                            id="vDate" lableText="Valid Until"
                                            type="date" onChange={setValidity}
                                            placeholder=""
                                            inputStyle={inputStyle}
                                            labelStyle={labelStyle}
                                            value={validity} />
                                    </div>
                                    <div className="w-3/12">
                                        <label htmlFor="disType"
                                            className={labelStyle}>
                                            Discount Type
                                        </label>
                                        <select value={isCash}
                                            onChange={handleDrop}
                                            className={inputStyle}>
                                            <option value="0">CASH</option>
                                            <option value="1">PERCENT</option>
                                        </select>
                                    </div>
                                    <div className="w-3/12">
                                        <Input
                                            id="discount" lableText="Discount"
                                            type="text" onChange={setDiscount}
                                            placeholder="discount"
                                            inputStyle={inputStyle}
                                            labelStyle={labelStyle}
                                            value={discount} />
                                    </div>
                                </div>
                            </div>

                            {/* bill details */}
                            <div className="dc-content w-full flex flex-col items-center px-5 py-2">

                                <div
                                    className="
                                w-full flex items-center 
                                justify-between text-xs px-2 py-1 mb-1 rounded-lg
                                font-bold text-black bg-blue-gray-100/50">
                                    <div className="w-[4%] flex-col-center">#</div>
                                    <div className="w-3/12 flex-col-center">MODEL</div>
                                    <div className="w-5/12 flex-col-center">DESC</div>
                                    <div className="w-1/12 flex-col-center">MRP</div>
                                    <div className="w-1/12 flex-col-center">QTY.</div>
                                    <div className="w-1/12 flex-col-center">OFFER</div>
                                    <div className="w-[4%] flex-col-center"></div>
                                </div>

                                {
                                    quoteItems && quoteItems.length > 0 ? quoteItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="dc-item border-b
                                                    w-full flex items-center 
                                                    justify-between text-sm p-2 mb-1
                                                  text-black">
                                            <div className="w-[4%] flex-col-center">{index + 1}</div>
                                            <div className="w-3/12 flex-col-center">
                                                <img src={getImageUrl(item.articleId)} className="w-9/12" />
                                            </div>
                                            <div className="w-5/12 flex-col items-center justify-start">
                                                <div>
                                                    {
                                                        item.articleId.includes("H.") ? (<>
                                                            <span className="font-bold text-xs">Model:</span>
                                                            <span className="font-normal text-xs ml-1">{item.model}</span>
                                                        </>) : (<>
                                                            <span className="font-bold text-xs">ArticleID:</span>
                                                            <span className="font-normal text-xs ml-1">{item.articleId}</span>
                                                        </>)
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        item.articleId.includes("H.") ? (<>
                                                            <span className="font-bold text-xs">Size (mm):</span>
                                                            <span className="font-normal text-xs ml-1">{item.size}</span>
                                                        </>) : (<>
                                                            <span className="font-bold text-xs">Model:</span>
                                                            <span className="font-normal text-xs ml-1">{item.model}</span>
                                                        </>)
                                                    }
                                                </div>
                                                <div>
                                                    <p className="font-light text-[9px] text-justify leading-3">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="w-1/12 flex-col-center text-xs">{formatAmount(item.mrp)}</div>
                                            <div className="w-1/12 flex-col-center text-xs">{item.qty}</div>
                                            <div className="w-1/12 flex-col-center text-xs">{formatAmount(item.offer)}</div>
                                            <div className="w-[4%] flex-col-center">
                                                <IconButton size="sm" data-articleid={item.articleId} onClick={() => removeItem(item.articleId)}
                                                    className="flex-col-center 
                                                        rounded-full hover:border hover:border-blue" variant="text" color="blue">
                                                    <IoClose size={18} />
                                                </IconButton>
                                            </div>
                                        </div>
                                    )) : ''
                                }

                                {/* <div
                                    className="dc-item
                                w-full flex items-center rounded-lg
                                justify-between text-sm p-2 mb-1
                                text-black border border-black">
                                    <div className="w-auto flex-1 flex-col-center"></div>
                                    <div className="w-2/12 flex-col-center">TOTAL</div>
                                    <div className="w-3/12 flex items-center justify-end font-bold">50,000</div>
                                </div> */}

                            </div>

                        </div>

                    </div>
            }

            <Dialog
                size="xs"
                open={isDrawerOpen}
                handler={closeDrawer}
            >
                <DialogBody className="bg-blue-gray-50">
                    <div className="w-full flex-col-center">
                        <div className="text-sm w-full flex flex-row items-center justify-start p-2">
                            Do you really want to remove this Article ?
                        </div>
                        <div className="text-sm w-full flex flex-row items-center justify-end">
                            <button className="btn btn-sm btn-ghost" onClick={() => closeDrawer(false)}>Cancel</button>
                            <button className="ml-1 btn btn-sm btn-error" onClick={() => closeDrawer(true)}>Delete</button>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>

        </>
    )
}