import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { startRegister } from '../../actions/actions';

export const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange] = useForm({
        rName: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: ''
    }); 

    const {rName, rEmail, rPassword1, rPassword2} = values


    const handleRegister = (e) => {
        e.preventDefault();

        if (rPassword1 !== rPassword2) {
            Swal.fire('Error', 'las constraseñas deben de ser iguales', 'error');
            // reset()
        } 
        else{

            dispatch(startRegister(rName, rEmail, rPassword1))
            
        }
    }


    return (
        <div className='bg-white h-screen'>
            <div className='w-full flex flex-wrap'>
                <div className="w-full md:w-1/2 flex flex-col">

                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Join Us.</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleRegister} >
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Name</label>
                                <input type="text" name='rName' value={rName} onChange={handleInputChange} placeholder="John Smith" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Email</label>
                                <input type="email" name='rEmail' value={rEmail} onChange={handleInputChange} placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Password</label>
                                <input type="password" name='rPassword1' value={rPassword1} onChange={handleInputChange} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Confirm Password</label>
                                <input type="password" name='rPassword2' value={rPassword2} onChange={handleInputChange} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <input type="submit" value="Register" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>Already have an account? <NavLink to='/login' > Login Here</NavLink>  </p>
                        </div>
                    </div>

                </div>

                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" src="https://graffica.info/wp-content/uploads/2017/07/logo-nasa-fondo-oscuro.jpg" />
                </div>

            </div>


        </div>
    )
}
