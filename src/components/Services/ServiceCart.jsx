
const ServiceCart = ({service}) => {
    const { serviceImage, serviceName, serviceDescription, viewDetailButton, servicePrice, image, name, serviceArea } = service
    return (
        <div>
        <div className="hero my-5  max-w-4xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="lg:w-[50%] h-[100%]">
                    <img src={serviceImage} className="w-full rounded-lg shadow-2xl" />
                </div>
                <div className="lg:w-[50%]">
                    <h1 className="text-5xl font-bold">{serviceName}</h1>
                    <p className="py-4">{serviceDescription}</p>
                    <div className="flex justify-between">
                        <div>
                            <img className="w-[60px] h-[60px] rounded-[50%]" src={image} alt="" />
                            <h1 className="my-3">Name: <span className="text-xl">{name}</span></h1>         
                        </div>
                        <div>
                            <p className="py-2">Price: <span className="text-xl">{servicePrice}</span></p>
                            <p>serviceArea: <span className="text-xl">{serviceArea}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceCart;