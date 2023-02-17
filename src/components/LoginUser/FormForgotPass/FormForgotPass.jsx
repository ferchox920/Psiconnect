import InputEmail from "../InputEmail/InputEmail";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { loading, titleMin, divContainer, submit, arrowDiv, form, arrow, divInputs, titleMinDiv, loadingDiv } from './FormForgotPass.module.css';
import { sendEmailForgetPassProfessional, sendEmailForgetPassUser } from '../../../features/apiPetitions.js'
import { successMessage } from "../../../features/errorsModals";

const FormForgotPass = ({SetSwitchForgotPass}) => {
const [ email, setEmail ] = useState('')
const [ switchLoading, setSwitchLoading ] = useState(false)

const handleOnSubmit = async(e) => {
    e.preventDefault();
    setSwitchLoading(true)
    const request = await sendEmailForgetPassUser({email:email});
    const requestTwo = await sendEmailForgetPassProfessional({email:email});
    setSwitchLoading(false)
    successMessage("Verificacion enviada al email")
        .then(data => SetSwitchForgotPass(false))
    setEmail('')
}
const handleInputChange = (e) => {
    setEmail(e.target.value)
}

    return (
        <div className={divContainer}>
            {
            switchLoading?
                <div className={loadingDiv}>
                    <h3 className={loading}>Cargando...</h3>
                </div>
                : 
                <>
                <div className={arrowDiv}>
                    <ArrowBackIcon 
                    className={arrow}
                    onClick={()=> SetSwitchForgotPass(false)}/>
                </div>
                <div className={titleMinDiv}>
                    <h3 className={titleMin}> Ingrese su correo</h3>
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
            </>
            }
        </div>
    )
}
export default FormForgotPass;