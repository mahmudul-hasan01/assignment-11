import img1 from '../../assets/award/depositphotos_93262040-stock-illustration-best-seller-logo.jpg'
import img2 from '../../assets/award/download.png'
import img3 from '../../assets/award/images.jpg'
import img4 from '../../assets/award/JzTZv8gv_400x400.jpg'
const Award = () => {
    return (
        <div>
            <div className='flex justify-center text-4xl mt-10'>
                <h1>Our Award</h1>
            </div>
            <div className='max-w-screen-lg mx-auto my-10 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between'>
                <img className='w-[150px] h-[150px] rounded-lg' src={img1} alt="" />
                <img className='w-[200px] h-[150px]' src={img2} alt="" />
                <img className='w-[200px] h-[150px]' src={img3} alt="" />
                <img className='w-[200px] h-[150px]' src={img4} alt="" />
            </div>
        </div>
    );
};

export default Award;