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

    // const hendleClick =(e)=>{
    //     e.preventDefault()
    //     const value =e.target.value
    //     // const data ={value: value}
    //     const data= axios.get(`https://server-site-lime.vercel.app/allService/?value=${value}`)
    //     .then(res => setInput(res.data))
    // }
    // ServiceName 
    // serviceName
    console.log(input)
    const getService = async () => {
        const data = await axios.get(`https://server-site-lime.vercel.app/allService`, { withCredentials: true })
        return data
    }
    const { data } = useQuery({
        queryKey: ['servicesCard'],
        queryFn: getService
    })
    const hendleClick = (e) => {
        e.preventDefault()
        setInput(e.target.value)
        console.log(e?.target?.value)
    }
    const hendleButton = (e) => {
        e.preventDefault()
        const filter = data?.data.filter(item => item.serviceName.toLowerCase().indexOf(input.toLowerCase()) !== -1)
        setValue(filter)
    }

    return (
        <div>
            <div className="flex justify-center mt-7">
                <form>
                    <input
                        onChange={hendleClick}
                        type="text"
                        className="h-full w-full rounded-l-[7px] border border-yellow-500 px-3 py-2.5-shown:border-blue-gray-200f"
                        placeholder="Search here...."
                    />
                </form>
                <button className="py-2 px-5 text-white rounded-r-lg bg-yellow-500" onClick={hendleButton}>Search</button>
            </div>
            <div>
                {
                    seeAll ? data?.data.map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                        :
                        data?.data.slice(0, 6).map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                }
            </div>
            <div className="flex justify-center">
                {
                    !seeAll && <button className="py-2 px-5 text-white font-semibold bg-yellow-500 rounded-lg my-5" onClick={() => setSeeAll(!seeAll)}>See All</button>
                }
            </div>

        </div>
    );
};

export default ShowAllService;