import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";
import Swal from 'sweetalert2';


export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken('auth', {email, password}, 'POST')

    const body = await resp.json();

    console.log(body);

    if (body.ok ) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-time', new Date().getTime())

        dispatch(login({
            uid: body.uid,
            name: body.name
        }))
    } else {
        Swal.fire('Error', body.msg, 'error');
    }
  }
}


export const startRegister = (name, email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('auth/register', {name, email, password}, 'POST')

        const body = await resp.json();

        if (body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-time', new Date().getTime())
    
            // dispatch(register({
            //     uid: body.uid,
            //     name: body.name,
            //     email: body.email,
            //     password: body.password
            // }))

            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }

    }
}

export const startCheckin = () => {
    return async(dispatch) => {

        const resp = await fetchConToken('auth/renew')

        const body = await resp.json();

        console.log(body);

        if (body.ok ) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-time', new Date().getTime())
    
            // dispatch(register({
            //     uid: body.uid,
            //     name: body.name,
            //     email: body.email,
            //     password: body.password
            // }))

            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        } else {
            dispatch(checkinFinish());
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
}) 

const checkinFinish = () => ({type: types.authCheckingFinish});

const logout = (user) => ({
    type: types.authLogout
})

export const startLogout= () => {
    return (dispatch) => {
        localStorage.clear();

        dispatch(logout());
    }
}