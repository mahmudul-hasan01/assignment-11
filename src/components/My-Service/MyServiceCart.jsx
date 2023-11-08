import axios from "axios";
import { Link } from "react-router-dom";

const MyServiceCart = ({ BookingData }) => {
    const { _id, Name, Image, email, ProviderEmail, TakingDate, Instruction, Price } = BookingData

    const hendleDelete =()=>{
        axios.delete(`http://localhost:5000/PurchaseData/${_id}`)
        .then(data => console.log(data.data))
    }
    return (
        <div className="mt-7">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={Image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{Name}</h2>
                    <p>{Instruction}</p>
                    <div className="card-actions justify-between">
                        <button onClick={hendleDelete} className="btn btn-primary">delete</button>
                        <Link to={`/Update/${_id}`} className="btn btn-secondary">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCart;