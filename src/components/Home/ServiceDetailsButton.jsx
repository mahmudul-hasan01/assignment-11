
import { useLoaderData } from "react-router-dom";

const ServiceDetailsButton = () => {
    const data = useLoaderData()
    const { serviceImage, serviceName, serviceDescription, viewDetailButton, servicePrice, image, name, serviceArea } = data
    

    const hendleSubmit =(e)=>{
        e.preventDefault()
    }

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
                        {/* <button className="btn w-full btn-primary">Book Now</button> */}

                        <button className="btn btn-neutral" onClick={() => document.getElementById('my_modal_5').showModal()}>Book Now</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box w-[600px] h-[500px] relative">
                                <form onSubmit={hendleSubmit} className="space-y-3">
                                    <input name="ServiceName" placeholder="Service Name" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="ServiceImage" placeholder="Service Image" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="Provideremail" placeholder="Provider email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="Useremail" placeholder="User email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="TakingDate" placeholder="Service Taking Date" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="instruction" placeholder="Instruction"className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <input name="Price" placeholder="Price"className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                                    <button className="btn btn-accent"> Purchase Now</button>
                                </form>
                                <div className="absolute top-0 right-0">
                                    <form method="dialog">
                                        <button className="btn">X</button>
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