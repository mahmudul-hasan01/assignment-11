import axios from "axios";
import { Link } from "react-router-dom";

const MyServiceCart = ({ BookingData }) => {
    const { _id, Name, Image, email, ProviderEmail, TakingDate, Instruction, Price } = BookingData

    const hendleDelete =()=>{
        axios.delete(`https://server-site-lime.vercel.app/PurchaseData/${_id}`)
        .then(data => console.log(data.data))
    }
    return (
        <div className="my-7">
            <div className="card w-96 mx-auto bg-base-100 shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>{Instruction}</p>
                    <div className="card-actions justify-between">
                        <button onClick={hendleDelete} className="bg-yellow-500 py-2 2 px-5 rounded-lg text-white text-xl">delete</button>
                        <Link to={`/Update/${_id}`} className="bg-yellow-500 py-2 2 px-5 rounded-lg text-white text-xl">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCart;