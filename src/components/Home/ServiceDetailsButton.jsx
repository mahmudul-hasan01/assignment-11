import axios from "axios";
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ServiceDetailsButton = () => {
    const { user } = useContext(AuthContext)
    const data = useLoaderData()
    const { serviceImage, serviceName, serviceDescription, viewDetailButton, servicePrice, image, name, serviceArea } = data

    const hendleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const Name = form.ServiceName.value
        const Image = form.ServiceImage.value
        const ProviderEmail = form.Provideremail.value
        const email = form.email.value
        const TakingDate = form.TakingDate.value
        const Instruction = form.Instruction.value
        const Price = form.Price.value
        const data = { Name, Image, email,ProviderEmail, TakingDate, Instruction, Price }
        axios.post('https://server-site-lime.vercel.app/Purchase', data)
            .then(data => console.log(data.data))
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={serviceImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <img className="w-[60px] h-[60px] rounded-[50%]" src={image} alt="" />
                        <h2 className="card-title">Area : {serviceArea}</h2>
                    </div>
                    <div className="card-actions ">
                        {/* <button className="btn w-full btn-primary">Book Now</button> */}

                        <button className="py-2 px-5 text-white font-semibold bg-yellow-500 rounded-lg w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box w-[600px] h-[500px] relative">
                                <form onSubmit={hendleSubmit} className="space-y-3">
                                    <input name="ServiceName" value={serviceName} readOnly className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="ServiceImage" value={serviceImage} readOnly className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="Provideremail" value={user?.email} readOnly placeholder="Provider email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="email" value={user?.email} readOnly placeholder="User email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="TakingDate" placeholder="Service Taking Date" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="Instruction" placeholder="Instruction" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="Price" value={servicePrice} readOnly placeholder="Price" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <button className="py-2 px-5 text-white font-semibold bg-yellow-500 rounded-lg"> Purchase Now</button>
                                </form>
                                <div className="absolute top-0 right-0">
                                    <form method="dialog">
                                        <button className="btn btn-neutral">X</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceDetailsButton;