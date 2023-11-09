import { Link } from 'react-router-dom';
import logo from '../../assets/Image/404-landing-page-free-vector.jpg'
const PageNotFound = () => {
    return (
        <div className='relative'>
            <img className='w-full h-full' src={logo} alt="" />
            <Link className='absolute top-0 lg:top-[20%] left-[38%] md:left-[42%] lg:left-[45%] bg-yellow-500 py-2 2 px-5 rounded-lg text-white text-xl' to="/">Home</Link>
        </div>
    );
};

export default PageNotFound;