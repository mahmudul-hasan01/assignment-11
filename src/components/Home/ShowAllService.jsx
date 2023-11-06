import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShowAddServiceCart from "./ShowAddServiceCart";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const ShowAllService = () => {
    const [input, setInput] = useState([])
    const [value, setValue] = useState([])
    console.log(value)
    const [seeAll, setSeeAll] = useState(false)

    const getService = async () => {
        const data = await axios.get(`http://localhost:5000/allService`)
        return data
    }
    const { data } = useQuery({
        queryKey: ['servicesCard'],
        queryFn: getService
    })
    // console.log(data?.data)
    const hendleClick =(e)=>{
        setInput(e.target.value)
    }
    const hendleButton =(e)=>{
        e.preventDefault()
        const filter =data?.data.filter(item => item.serviceName.toLowerCase().indexOf(input.toLowerCase()) !== -1 )
        setValue(filter)
    }

    return (
        <div>
            <div className="flex justify-center my-10">
                    <div className="w-72">
                        <div className="relative h-10 w-full min-w-[200px] ml-10 flex">
                            <input
                                onChange={hendleClick}
                                type="text"
                                className="h-full w-full rounded-l-[7px] border border-red-600   px-3 py-2.5-shown:border-blue-gray-200f"
                                placeholder="Search here...."
                            />
                            <NavLink className="py-2 px-5 text-white rounded-r-lg bg-red-600" onClick={hendleButton}>Search</NavLink>
                        </div>
                    </div>
                </div>
            <div>
                {
                  seeAll ?  value.map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                  :
                  value?.slice(0,6).map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                }
            </div>
           <div className="flex justify-center">
            {
                !seeAll &&  <button className="py-2 px-5 text-white font-semibold bg-[#009444] rounded-lg my-5" onClick={() => setSeeAll(!seeAll)}>See All</button>
            }
           </div>
            
        </div>
    );
};

export default ShowAllService;