// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useState } from "react";

const ServiceDetails = ({ data }) => {
    // const [services,setServices]=useState([])
    const { serviceImage, serviceName, serviceDescription, image, name, servicePrice } = data

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={serviceImage} className="w-[50%] h-full rounded-lg shadow-2xl" />
                <div className="w-[50%]">
                    <h1 className="text-5xl font-bold">{serviceName}</h1>
                    <p className="py-4">{serviceDescription}</p>
                    <div className="flex gap-10 items-center pb-5">
                        {/* <img src={image} alt="" /> */}
                        <div>
                            <h1>image</h1>
                            <h1>{name}</h1>
                        </div>
                        <p>{servicePrice}</p>
                    </div>
                    <button className="btn btn-primary mr-3"> Detail</button>
                    <button className="btn btn-secondary">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;