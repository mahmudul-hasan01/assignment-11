// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useState } from "react";

import { Link } from "react-router-dom";

const ServiceDetails = ({ data }) => {
    // const [services,setServices]=useState([])
    const { serviceImage, serviceName, serviceDescription, image, name, servicePrice } = data

    return (
        <div className="hero lg:min-h-screen shadow-md">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={serviceImage} className="lg:w-[50%] h-full rounded-lg shadow-2xl" />
                <div className="lg:w-[50%]">
                    <h1 className="text-5xl font-bold">{serviceName}</h1>
                    <p className="py-4">{serviceDescription}</p>
                    <div>
                        <div>        
                            <img className="w-[60px] h-[60px] rounded-[50%] mb-2" src={image} alt="" />
                            <h1>Name: {name}</h1>
                        </div>
                        <p className="py-2">Price: {servicePrice}</p>
                    </div>
                    <div className="mt-3">
                    <Link to='/ServiceDetailsButton' className="bg-yellow-500 py-2 2 px-5 rounded-lg text-white text-xl mr-3">Details</Link>
                    <Link to='/ShowAllService' className="border-2 border-yellow-500 py-2 hover:bg-yellow-500 hover:text-white duration-500 px-5 text-xl rounded-lg">Show All</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;