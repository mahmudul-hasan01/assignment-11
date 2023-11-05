import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowAddServiceCart from "./ShowAddServiceCart";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";

const ShowAllService = () => {
    // const [input, setInput] = useState("")
    // const [value, setValue] = useState([])
    // const [seeAll, setSeeAll] = useState(false)

    const getService = async () => {
        const data = await axios.get('/service.json')
        return data
    }
    const { data } = useQuery({
        queryKey: ['servicesCard'],
        queryFn: getService
    })

   

    return (
        <div>
            <div>
                {
                  data?.data.slice(0,6).map(item => <ShowAddServiceCart key={item.serviceImage} service={item}></ShowAddServiceCart>)
                }
            </div>   
        </div>
    );
};

export default ShowAllService;