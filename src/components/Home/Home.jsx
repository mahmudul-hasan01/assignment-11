import { useQuery } from "@tanstack/react-query";
import ServiceDetails from "./ServiceDetails";
import axios from "axios";

const Home = () => {

    const getService = async () => {
        const data =await axios.get('http://localhost:5000/service')
        console.log(data)
        return data
    }
    const { data } = useQuery({
        queryKey: ['services'],
        queryFn: getService
    })

    return (
        <div>
            <div>
                {
                    data?.data.map(item => <ServiceDetails key={item.serviceName} data={item}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Home;