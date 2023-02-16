import InputEmail from "../InputEmail/InputEmail";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TitleMin, divContainer, submit, arrowDiv, form, arrow, divInputs, titleMinDiv } from './FormForgotPass.module.css';


const FormForgotPass = ({SetSwitchForgotPass}) => {
const [ email, setEmail ] = useState('')

const handleOnSubmit = async(e) => {
    e.preventDefault()
}
const handleInputChange = (e) => {
    setEmail(e.target.value)
}

    return (
        <div className={divContainer}>
            <div className={arrowDiv}>
                <ArrowBackIcon 
                className={arrow}
                onClick={()=> SetSwitchForgotPass(false)}/>
            </div>
            <div className={titleMinDiv}>
                <h3 className={TitleMin}> Ingrese su correo</h3>
            </div>  
            <form className={form} onSubmit={handleOnSubmit}>
                <div className={divInputs}>
                    <InputEmail
                    form={{email:email}}
                    changeHandler={handleInputChange}
                    errors={{}}
                    />
                    <input
                    type='submit'
                    value='Enviar'
                    className={submit}
                    />
                </div>
            </form>
        </div>
    )
}
export default FormForgotPass;