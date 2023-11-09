import { Link } from 'react-router-dom';
import image from '../../assets/Image/registration.jpg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

const Register = () => {
    const {register,googleLogin}=useContext(AuthContext)

    const hendleRegister =(e)=>{
        e.preventDefault()
        const form =e.target
        const email =form.email.value
        const password =form.password.value
        register(email,password)
        .then(data => {
            return Swal.fire(
                'Good!',
                'Successfully Register.',
                'success'
              )
        })
        .catch(error => console.log(error))
    }
    const hendleGoogleLogin =()=>{
        googleLogin()
        .then()
        .catch()
    }

    return (
       
        <div>
        <div className='flex justify-center items-center w-full mt-20' >
            <div className='w-[400px] bg-slate-100 rounded-md'>
                <div className='border-b-2 border-black mx-8'>
                <h1 className='text-center py-3 text-4xl'>Register</h1>
                </div>
                <form onSubmit={hendleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                        <p>You have acount? pleace <Link className='text-blue-600 underline' to='/Login'>Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                            <button className="py-2 px-5 rounded-lg text-white bg-yellow-500">Login</button>
                            <button className="btn btn-outline text-xl mt-2" onClick={hendleGoogleLogin}><FcGoogle></FcGoogle> Google</button>
                        </div>
                </form>
            </div>
            <div>
                <img className='w-[420px] h-[400px]' src={image} alt="" />
            </div>
        </div>
     </div>
    );
};

export default Register;