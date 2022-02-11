import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogin } from '../../actions/actions';
import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        lEmail: '',
        lPassword: ''
    });


    const {lEmail, lPassword } = values

    const handleLogin = ( e) => {

        e.preventDefault();
        dispatch(startLogin(lEmail, lPassword));
    }

    return (
        <div className='bg-white font-light h-screen'>

            <div className='w-full flex flex-wrap'>
                <div className="w-full md:w-1/2 flex flex-col">

                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl">Welcome.</p>
                        <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleLogin} >
                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Email</label>
                                <input type="email" name='lEmail' value={lEmail} onChange={handleInputChange} placeholder="your@email.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <div className="flex flex-col pt-4">
                                <label className="text-lg">Password</label>
                                <input type="password" name='lPassword' value={lPassword} onChange={handleInputChange} placeholder="Password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" />
                            </div>

                            <input type="submit" value="Log In" className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8" />
                        </form>
                        <div className="text-center pt-12 pb-12">
                            <p>Don't have an account? <NavLink to='register'>Registrate</NavLink> </p>
                            <p><NavLink to='/'>Navegar</NavLink></p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block" src="https://graffica.info/wp-content/uploads/2017/07/logo-nasa-fondo-oscuro.jpg" />
                </div>
            </div>
        </div>
    );
};
