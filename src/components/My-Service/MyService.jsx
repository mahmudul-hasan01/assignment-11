import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import MyServiceCart from "./MyServiceCart";

const MyService = () => {
    const {user}=useContext(AuthContext)

    const getService = async () => {
        const data =await axios.get(`https://server-site-lime.vercel.app/PurchaseData/?email=${user?.email}`,{withCredentials:true})
        return data
    }
    const { data } = useQuery({
        queryKey: ['myService'],
        queryFn: getService
    })

    return (
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
            {
                data?.data.map(item => <MyServiceCart key={item._id} BookingData={item}></MyServiceCart>)
            }
        </div>
    );
};

export default MyService;