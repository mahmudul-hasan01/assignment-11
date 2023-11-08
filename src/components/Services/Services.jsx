import { useLoaderData } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const Services = () => {
    const data =useLoaderData()
    return (
        <div>
            {
                data.map(item => <ServiceCart key={item._id} service={item}></ServiceCart>)
            }
        </div>
    );
};

export default Services;