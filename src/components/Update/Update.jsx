import axios from "axios";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const previousData = useLoaderData()
    const id = previousData?._id

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
        const data = { Name, Image, email, ProviderEmail, TakingDate, Instruction, Price }
        axios.put(`http://localhost:5000/PurchaseData/${id}`, data)
       .then(data => console.log(data.data))
    }


    return (
        <div className="modal-box w-[600px] h-[500px] mx-auto">
            <form onSubmit={hendleSubmit} className="space-y-3">
                <input name="ServiceName" placeholder="Service Name" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <input name="ServiceImage" placeholder="Service Image" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <input name="Provideremail" placeholder="Provider email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <input name="email" placeholder="User email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <input name="TakingDate" placeholder="Service Taking Date" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <input name="Instruction" placeholder="Instruction" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <input name="Price"  placeholder="Price" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />
                <button className="btn btn-accent"> Purchase Now</button>
            </form>
        </div>
    );
};

export default Update;