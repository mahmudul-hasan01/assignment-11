import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";

import { AuthContext } from "../AuthProvider/AuthProvider";
import MyScheduleCaet from "./MyScheduleCaet";

const MySchedules = () => {
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
        <div>
            {
                data?.data.map(item => <MyScheduleCaet key={item._id} BookingData={item}></MyScheduleCaet>)
            }
        </div>
    );
};

export default MySchedules;