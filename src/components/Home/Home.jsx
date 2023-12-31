import { useQuery } from "@tanstack/react-query";
import ServiceDetails from "./ServiceDetails";
import axios from "axios";
import Banner from "../Banner/Banner";
import Award from "./Award";
import Video from "./Video";
import Happy from "./Happy";

const Home = () => {

    const getService = async () => {
        const data =await axios.get('https://server-site-lime.vercel.app/service',{withCredentials:true})
        return data
    }
    const { data } = useQuery({
        queryKey: ['services'],
        queryFn: getService
    })
    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    data?.data.map(item => <ServiceDetails key={item.serviceName} data={item}></ServiceDetails>)
                }
            </div>
            <Award></Award>
            <Video></Video>
            <Happy></Happy>
        </div>
    );
};

export default Home;