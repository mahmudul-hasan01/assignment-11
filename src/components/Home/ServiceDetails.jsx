// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { useState } from "react";

import { Link } from "react-router-dom";

const ServiceDetails = ({ data }) => {
    // const [services,setServices]=useState([])
    const { serviceImage, serviceName, serviceDescription, image, name, servicePrice } = data

    return (
        <div className="hero min-h-screen shadow-md">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={serviceImage} className="w-[50%] h-full rounded-lg shadow-2xl" />
                <div className="w-[50%]">
                    <h1 className="text-5xl font-bold">{serviceName}</h1>
                    <p className="py-4">{serviceDescription}</p>
                    <div>
                        <div>        
                            <img className="w-[60px] h-[60px] rounded-[50%] mb-2" src={image} alt="" />
                            <h1>Name: {name}</h1>
                        </div>
                        <p className="py-2">Price: {servicePrice}</p>
                    </div>
                    <Link to='/ServiceDetailsButton' className="btn btn-primary mr-3">Details</Link>
                    <Link to='/ShowAllService' className="btn btn-secondary">Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;