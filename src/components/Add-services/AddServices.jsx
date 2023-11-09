import axios from "axios";
import Swal from "sweetalert2";

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
        
        // const { _id,serviceImage, serviceName, serviceDescription, viewDetailButton, servicePrice, image, name, serviceArea } = service
        const data = { Yourname, Image, Youremail,ServiceName, ServiceArea, Description, Price }
        console.log(data)
        axios.post(`https://server-site-lime.vercel.app/allService`, data)
       .then(data => {
        return Swal.fire(
            'Good!',
            'Successfully Add Services.',
            'success'
          )
       })
    }
    
    return (
        <div className="modal-box md:w-[600px] mx-auto">
            <form onSubmit={hendleSubmit} className="space-y-3">
                <input name="Yourname" placeholder=" Your name" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="Youremail" placeholder="Your email" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="email" />

                <input name="ServiceName" placeholder="Service Name" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="PictureURL" placeholder="Picture URL" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="ServiceArea" placeholder="Service Area" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="Price"  placeholder="Price" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <input name="Description"  placeholder="Description" className="bg-red-100 border-2 border-black rounded-lg w-full py-2 pl-4" type="text" />

                <button className="bg-yellow-500 py-2 2 px-5 rounded-lg text-white text-xl"> Purchase Now</button>
            </form>
        </div>
    );
};

export default AddServices;