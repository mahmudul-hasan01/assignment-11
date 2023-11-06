
import { useLoaderData } from "react-router-dom";

const ServiceDetailsButton = () => {
    const data = useLoaderData()
    const { serviceImage, serviceName, serviceDescription, viewDetailButton, servicePrice, image, name, serviceArea } = data
    

    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={serviceImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <img className="w-[60px] h-[60px] rounded-[50%]" src={image} alt="" />
                        <h2 className="card-title">Area : {serviceArea}</h2>
                    </div>
                    <div className="card-actions ">
                        <button className="btn w-full btn-primary">Book Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceDetailsButton;