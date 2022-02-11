import { types } from "../types/types";


//si el usuario no esta autenticado
const initialState = {
    cheking: true
}


export const authReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case types.authLogin:
            return {
                ...state,
                cheking: false,
                ...action.payload
            }
        case types.authStartRegister:
            return {
                ...state,
                cheking: false,
                ...action.payload
            }
        case types.authCheckingFinish:
            return {
                ...state,
                cheking: false
            }
        case types.authLogout:
            return {
                cheking: false
            }
     
        default:
            return state;
    }
};
