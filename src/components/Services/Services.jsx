import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ShowAddServiceCart from "../Home/ShowAddServiceCart";

const Services = () => {
    const [input, setInput] = useState([])
    const [value, setValue] = useState([])
    console.log(value)
    const [seeAll, setSeeAll] = useState(false)


    const getService = async () => {
        const data = await axios.get(`https://server-site-lime.vercel.app/allService`, { withCredentials: true })
        return data
    }
    const { data } = useQuery({
        queryKey: ['servicesCard'],
        queryFn: getService
    })
    console.log(data?.data)
    const hendleClick = (e) => {
        e.preventDefault()
        setInput(e.target.value)
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
                    value.length ?
                    <div>
                        {
                            seeAll? value.map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                        :
                        value.slice(0, 6).map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                        }
                    </div>    
                :
                   <div>
                    {
                        seeAll ?
                        data?.data.map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)
                        :
                        data?.data.slice(0, 6).map(item => <ShowAddServiceCart key={item._id} service={item}></ShowAddServiceCart>)

                    }
                   </div>
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

export default Services;