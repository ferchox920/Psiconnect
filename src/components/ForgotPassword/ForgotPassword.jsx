import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { errorMenssage, successMessage } from '../../features/errorsModals.js';

const query = new URLSearchParams(useLocation().search);
const token = query.get('tkn')

const forgotPassword = () => {

const [ passwords, setPasswords ] = useState({
    password:'',
    repeatPassword:''
})
useEffect(()=>{

},[])

const handleInputChange = async() => {

}

    return(
        <div>  
            <input
            className={errors.repeatPassword ? style.inputError : null}
            type="password"
            name="password"
            value={register.password}
            placeholder="contraseña"
            onChange={ handleInputChange }
            required
            />
            <input
            className={errors.password ? style.inputError : null}
            type="password"
            name="repeatPassword"
            value={register.repeatPassword}
            placeholder="Repetir contraseña"
            onChange={ handleInputChange }
            required
            />
      </div>
    )
}

export default forgotPassword;