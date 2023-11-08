import axios from "axios";

const AddServices = () => {
    const hendleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const Yourname = form.Yourname.value
        const Youremail = form.Youremail.value
        const ServiceName = form.ServiceName.value
        const Image = form.PictureURL.value
        const ServiceArea = form.ServiceArea.value
        const Price = form.Price.value
        const Description = form.Description.value
        
        const data = { Yourname, Image, Youremail,ServiceName, ServiceArea, Description, Price }
        console.log(data)
        axios.post(`http://localhost:5000/allService`, data)
       .then(data => console.log(data.data))
    }
    
    return (
        <div className="modal-box w-[600px] mx-auto">
            <form onSubmit={hendleSubmit} className="space-y-3">
                <input name="Yourname" placeholder=" Your name" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="Youremail" placeholder="Your email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="email" />

                <input name="ServiceName" placeholder="Service Name" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="PictureURL" placeholder="Picture URL" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="ServiceArea" placeholder="Service Area" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="Price"  placeholder="Price" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="Description"  placeholder="Description" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <button className="btn btn-accent"> Purchase Now</button>
            </form>
        </div>
    );
};

export default AddServices;