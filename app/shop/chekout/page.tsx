
"use client";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/Button";
interface chekoutType {
    basket: boolean,
    category_id: string,
    cost: number,
    count: number,
    discount: number,
    image_url: string[],
    liked: boolean,
    product_description: string,
    product_id: string,
    product_name: string,
    short_description: string,
    size: string[],
    tags: string[],
}

function chekout() {
    const [basketArr, setbasketArr] = useState<chekoutType[]>([])

    const [form, setform] = useState({
        firstName: "",
        lastName: "",
        city: "",
        street: "",
        zip: "",
        email: "",
        phone: "",
        differentAddress: false,
        payment: "",
    });
    useEffect(() => {
        const storedbasketArr = localStorage.getItem('basketArr')
        if (storedbasketArr) {
            setbasketArr(JSON.parse(storedbasketArr))
        }
    }, [])

    const handleArray = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setform(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };
    const [orderModal, setOrderModal] = useState<boolean>(false)
    const closeModal = (e: React.MouseEvent) => {
        if ((e.target as HTMLButtonElement).id == "modal-wrapper") {
            setOrderModal(false);
        }
    }
    const total = basketArr.reduce((acc, item) => acc + item.cost * item.count, 0)
    const discount = 16.00
    const allTotal = total + discount
    const finishedModal = () => {
        setTimeout(() => {
            toast.success('Thank you Finish =)')
        },400)
        setOrderModal(false)
    }
    return (
        <div className="flex gap-[60px] justify-between">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="flex flex-col gap-[21px]">
                <h2 className="font-bold text-[17px] leading-[16px] text-[#3D3D3D]">
                    Billing Address
                </h2>
                <form className="w-[730px]" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label>First Name *</label>
                            <input
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label>Last Name *</label>
                            <input
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label>Country / Region *</label>
                            <select
                                name="country"
                                className="border px-4 py-2 w-full"
                                required
                            >
                                <option value="">Select a country / region</option>
                                <option value="USA">USA</option>
                                <option value="Canada">Canada</option>
                                <option value="UK">UK</option>
                            </select>
                        </div>
                        <div>



                            <label>Town / City *</label>
                            <input
                                type="text"
                                name="city"
                                value={form.city}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label>Street Address *</label>
                            <input
                                type="text"
                                name="street"
                                value={form.street}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label>State *</label>
                            <select
                                name="state"
                                className="border px-4 py-2 w-full"
                                required
                            >
                                <option value="">Select a state</option>
                                <option value="California">California</option>
                                <option value="Texas">Texas</option>
                                <option value="New York">New York</option>
                            </select>
                        </div>
                        <div>
                            <label>Zip *</label>
                            <input
                                type="text"
                                name="zip"
                                value={form.zip}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label>Email Address *</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label>Phone Number *</label>
                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleArray}
                                className="border px-4 py-2 w-full"
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <label>Order Notes (optional)</label>
                        <textarea
                            name="orderNotes"
                            className="border px-4 py-2 w-[49%] h-[147px]"
                        />
                    </div>


                </form>
            </div>
            <div className="w-full flex flex-col gap-[21px]">
                <h2 className="font-bold text-[17px] leading-[16px] text-[#3D3D3D]">
                    Your Order
                </h2>
                <div className="flex justify-between border-b-2">
                    <p className="font-normal text-[16px] leading-[16px] text-[#3D3D3D]">
                        Products
                    </p>
                    <p className="font-normal text-[16px] leading-[16px] text-[#3D3D3D]">
                        Subtotal
                    </p>
                </div>
                <div className="flex flex-col">
                    {basketArr.map(item => (
                        <div key={item.product_id} className="flex flex-col">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-[11px] items-center">
                                    <img src={item?.image_url[0]} alt="" width={70} height={70} />
                                    <div className="flex flex-col gap-[8px]">
                                        <span className="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">{item.product_name}</span>
                                        <span className="flex items-center gap-[9px] font-normal text-[14px] text-[#3D3D3D] leading-[16px] opacity-[0.6]">SKU: <p className="opacity-[1] text-[black]">1995751877966</p></span>
                                    </div>
                                </div>
                                <span className="font-normal text-[14px] leading-[16px] text-[#727272]">(x {item.count})</span>
                                <span className="font-bold text-[18px] leading-[16px] text-[#46A358]">${item.cost * item.count}.00</span>
                            </div>
                        </div>
                    ))}
                    <div className="flex flex-col mt-[21px] items-end ">
                        <div className="w-[372px] flex flex-col gap-[20px]">
                            <p className="flex justify-end gap-[7px] font-normal text-[14px] leading-[16px] text-[#3D3D3D]">Have a coupon code? <span className="font-medium text-[#46A358] cursor-pointer">Click here</span></p>
                            <ul className='flex flex-col gap-[10px]'>
                                <li className='flex justify-between'>
                                    <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Subtotal</p>
                                    <p className='font-medium text-[18px] leading-[16px] text-[#3D3D3D]'>${total.toFixed(2)}</p>
                                </li>
                                <li className='flex justify-between'>
                                    <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Coupon Discount</p>
                                    <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D]'>(-) 00.00</p>
                                </li>
                                <li className='flex justify-between'>
                                    <p className='font-normal text-[15px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Shipping</p>
                                    <p className='font-medium text-[18px] leading-[16px] text-[#3D3D3D]'>${discount.toFixed(2)}</p>
                                </li>
                                <li className='flex justify-end font-normal text-[12px] leading-[16px] text-[#46A358] cursor-pointer'>View shipping charge</li>
                                <li className='flex justify-between mt-[15px]'>
                                    <p className='font-bold text-[16px] leading-[16px] text-[#3D3D3D] mb-[8px]'>Total</p>
                                    <p className='font-bold text-[18px] leading-[16px] text-[#46A358]'>${total.toFixed(2)}</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="mt-4 flex flex-col items-end">
                    <div className="w-[372px]">
                        <h2 className="text-xl font-bold mb-[20px]">Payment Method</h2>
                        <div className="flex flex-col gap-[15px]">
                            <label className="flex items-center gap-[10px] pt-[11px] pl-[11px] pb-[9px] w-full border-[1px] rounded-[3px] border-[#EAEAEA] hover:border-[#46A358]">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    onChange={handleArray}
                                    required
                                />
                                <img src="/paymentMethod.svg" alt="" />
                            </label>
                            <label className="flex items-center gap-[10px] pt-[11px] pl-[11px] pb-[9px] w-full border-[1px] rounded-[3px] border-[#EAEAEA] hover:border-[#46A358]">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="bank"
                                    onChange={handleArray}
                                    required
                                />
                                Dorect bank transfer
                            </label>
                            <label className="flex items-center gap-[10px] pt-[11px] pl-[11px] pb-[9px] w-full border-[1px] rounded-[3px] border-[#EAEAEA] hover:border-[#46A358]">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    onChange={handleArray}
                                    required
                                />
                                Cash on Delivery
                            </label>
                        </div>
                        <button onClick={() => setOrderModal(true)} className="bg-green-500 mt-[50px] w-full hover:bg-green-600 text-white px-6 py-2 rounded">
                            Place Order
                        </button>
                        <div onClick={closeModal} id='modal-wrapper' className={`${orderModal ? "left-0" : "left-[-100%]"} modal fixed duration-500 top-0 z-[60] backdrop-contrast-30 h-[100vh] overflow-y-scroll w-full`}>
                            <div className='mx-auto flex mt-[33px] justify-center items-center'>
                                <div className={`w-[40%] flex flex-col shadow-lg shadow-[#46A358] mt-[50px] gap-5`}>
                                    <div className="flex bg-[#46A3580F] pb-[16px] pt-[20px] flex-col items-center gap-[16px]">
                                        <img src="/thank-you.svg" alt="" width={80} height={80} />
                                        <p className="font-normal text-[16px] leading-[16px] text-[#727272]">Your order has been received</p>
                                    </div>
                                    <div className="bg-[#FFFFFF]">
                                        <div className="flex items-center px-[42px] gap-[23px]">
                                            <div className="flex items-center gap-[22px] py-[15px]">
                                                <div className="flex flex-col gap-[4px]">
                                                    <span className="font-normal text-[14px] leading-[16px] text-[#727272]">Order Number</span>
                                                    <p className="font-bold text-[15px] leading-[16px] text-[#727272]">19586687</p>
                                                </div>
                                                <span className="h-[31px] w-[1px] bg-[#46A35833]"></span>
                                            </div>

                                            <div className="flex items-center gap-[22px] py-[15px]">
                                                <div className="flex flex-col gap-[4px]">
                                                    <span className="font-normal text-[14px] leading-[16px] text-[#727272]">Date</span>
                                                    <p className="font-bold text-[15px] leading-[16px] text-[#727272]">15 Sep,2021</p>
                                                </div>
                                                <span className="h-[31px] w-[1px] bg-[#46A35833]"></span>
                                            </div>
                                            <div className="flex items-center gap-[22px] py-[15px]">
                                                <div className="flex flex-col gap-[4px]">
                                                    <span className="font-normal text-[14px] leading-[16px] text-[#727272]">Total</span>
                                                    <p className="font-bold text-[15px] leading-[16px] text-[#727272]">2,699.00</p>
                                                </div>
                                                <span className="h-[31px] w-[1px] bg-[#46A35833]"></span>
                                            </div>
                                            <div className="flex flex-col gap-[4px]">
                                                <span className="font-normal text-[14px] leading-[16px] text-[#727272]">Payment Method</span>
                                                <p className="font-bold text-[15px] leading-[16px] text-[#727272]">Cash on delivery</p>
                                            </div>
                                        </div>
                                        <span className="h-[1px] w-full bg-[#46A35833] mb-[18px] block"></span>
                                        <div className="px-[42px]">
                                            <h2 className="font-bold text-[15px] leading-[16px] text-[#3D3D3D]">Order Details</h2>
                                            <div className="py-[12px] flex justify-between">
                                                <p className="font-medium text-[16px] leading-[16px] text-[#3D3D3D] w-[210px]">Products</p>
                                                <p className="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">Qty</p>
                                                <p className="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">Subtotal</p>
                                            </div>
                                            <span className="h-[1px] w-full bg-[#46A35833] mb-[18px] block"></span>
                                            <div className="mb-[20px]">
                                                {basketArr.map(item => (
                                                    <div key={item.product_id} className="flex flex-col">
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex gap-[11px] items-center">
                                                                <img src={item?.image_url[0]} alt="" width={70} height={70} />
                                                                <div className="flex flex-col gap-[8px]">
                                                                    <span className="font-medium text-[16px] leading-[16px] text-[#3D3D3D]">{item.product_name}</span>
                                                                    <span className="flex items-center gap-[9px] font-normal text-[14px] text-[#3D3D3D] leading-[16px] opacity-[0.6]">SKU: <p className="opacity-[1] text-[black]">1995751877966</p></span>
                                                                </div>
                                                            </div>
                                                            <span className="font-normal text-[14px] leading-[16px] text-[#727272]">(x {item.count})</span>
                                                            <span className="font-bold text-[18px] leading-[16px] text-[#46A358]">${item.cost * item.count}.00</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex flex-col gap-[24px] items-end">
                                                <div className="flex justify-between w-[70%]">
                                                    <p>Shiping</p>
                                                    <span>${discount.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between w-[70%]">
                                                    <strong>Total</strong>
                                                    <span>${allTotal.toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <span className="h-[1px] w-full bg-[#46A35833] my-[20px] block"></span>
                                            <p className="text-center">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
                                            <div className="flex justify-center mt-[50px] mb-[47px]">
                                               <Button onclick={finishedModal} buttonWidth={162} btnBg={false} padB={13} padT={16} title="Track your order"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default chekout;