import img1 from '../../assets/customer/istockphoto-1319763433-612x612.jpg'
import img2 from '../../assets/customer/istockphoto-1345670568-612x612.jpg'
import img3 from '../../assets/customer/istockphoto-1406165608-612x612.jpg'
import img4 from '../../assets/customer/360_F_494420738_z1TXriTb5zY4pGOVWeDKKiwY0uRVYpiB.jpg'

const Happy = () => {
    return (
        <div>
        <div className='flex justify-center text-4xl mt-10'>
            <h1>Our Customer</h1>
        </div>
        <div className='max-w-screen-lg mx-auto my-10 flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-0 justify-between'>
            <img className='w-[250px] h-[250px] rounded-lg' src={img1} alt="" />
            <img className='w-[250px] h-[250px] rounded-lg' src={img2} alt="" />
            <img className='w-[250px] h-[250px] rounded-lg' src={img3} alt="" />
            <img className='w-[250px] h-[250px] rounded-lg' src={img4} alt="" />
            
        </div>
    </div>
    );
};

export default Happy;