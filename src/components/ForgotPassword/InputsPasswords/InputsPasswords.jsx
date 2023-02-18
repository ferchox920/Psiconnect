import { inputs, inputsDiv, iconDiv, icons, inputsDivError, spanError } from './InputsPasswords.module.css'  
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



const InputsPasswords = ({state, errors, handleInputChange}) => {

const [ passVisibility,  setPassVisibility ] = useState(false)
const [ repeatVisibility,  setRepeatVisibility ] = useState(false)

const visibilityPass = (isPass) =>{
    if(isPass){
        passVisibility? setPassVisibility(false): setPassVisibility(true)
    }else{
        repeatVisibility? setRepeatVisibility(false): setRepeatVisibility(true)
    }
}   
    
    return(
            <>
            <span className={spanError} >{errors.password}</span>
            <div className={errors.password ? inputsDivError : inputsDiv}>
            <input
                className={ inputs }
                type={passVisibility? 'text' : 'password'}
                name="password"
                value={state.password}
                placeholder="Contraseña"
                onChange={ handleInputChange }
                required
                />
            <div className={iconDiv} onClick={()=>visibilityPass(true)}>
                {
                passVisibility? 
                <VisibilityOffIcon  className={icons} /> : 
                <RemoveRedEyeIcon  className={icons} />
                }
            </div> 
            </div>
            <span className={spanError} >{errors.repeatPassword}</span>
            <div className={errors.repeatPassword ? inputsDivError : inputsDiv}>
            <input
                className={ inputs }
                type={repeatVisibility? 'text' : 'password'}
                name="repeatPassword"
                value={state.repeatPassword}
                placeholder="Repetir contraseña"
                onChange={ handleInputChange }
                required
                />
             <div className={iconDiv} onClick={()=>visibilityPass(false)}>
                {
                repeatVisibility? 
                <VisibilityOffIcon className={icons} /> :  
                <RemoveRedEyeIcon  className={icons} />
                }
             </div>   
             </div>
          </>
    )
}
        
export default InputsPasswords;
          