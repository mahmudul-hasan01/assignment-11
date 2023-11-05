import { Link, NavLink } from "react-router-dom";

const ShowAddServiceCart = ({ service,henleClick,henlebutton }) => {

    const { serviceImage, serviceName, serviceDescription, viewDetailButton, servicePrice, image, name, serviceArea } = service


    return (
        <div>
            <div className="hero my-5  max-w-4xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="w-[50%] h-[100%]">
                        <img src={serviceImage} className="w-full rounded-lg shadow-2xl" />
                    </div>
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
                        <Link to='/ServiceDetailsButton' className="btn btn-primary mr-3">{viewDetailButton}</Link>
                        {/* <Link to='/ShowAllService' className="btn btn-secondary">Show All</Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAddServiceCart;