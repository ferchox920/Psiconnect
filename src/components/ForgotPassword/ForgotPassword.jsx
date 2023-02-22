import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { errorMenssage, successMessage } from '../../features/errorsModals.js';
import { verifyTokenForgotPassword, forgotPasswordUser, forgotPasswordProfessional } from '../../features/apiPetitions.js';
import { form, DivContainerForm, title, imgDiv, buttonSubmit, img, imgDivContainer} from './ForgotPassword.module.css'
import validationsForm from '../RegisterPsico/validator.js';
import InputsPasswords from './InputsPasswords/InputsPasswords.jsx'

const ForgotPassword = () => {

const query = new URLSearchParams(useLocation().search);
const token = query.get('tkn')

const [ passwords, setPasswords ] = useState({
    password:'',
    repeatPassword:''
})
const [ errors, setErrors ] = useState({})
const [ verifyToken, setVerifyToken ] = useState(null)

useEffect(()=>{
    verifyTokenForgotPassword(token)
    .then(data =>{
        if(data.status === 204) setVerifyToken(true)
        else  setVerifyToken(false)
    })
    .catch(err => setVerifyToken(false))
},[])

const handleInputChange = (e) => {
    setPasswords({
        ...passwords,
        [e.target.name] : e.target.value
    })
    setErrors(
        validationsForm[e.target.name]({
        ...passwords,
        [e.target.name]: e.target.value,
      })
    );
}
const checkErrors = () => {
    setErrors(validationsForm.password({
        ...errors,
        ...passwords
    }))
    setErrors(validationsForm.repeatPassword({
        ...errors,
        ...passwords
    }))
    return Object.keys(errors).at(0)? true : false
}
const hanldeOnSubimt = async(e) => {
    e.preventDefault()
    if(checkErrors()) errorMenssage(Object.values(errors).join(', ')|| 'Error') 
    else {
        const request = await forgotPasswordUser(token,{newPassword: passwords.password})
        const requestTwo = await forgotPasswordProfessional(token,{newPassword: passwords.password})
        if(request.data){
            successMessage(request.data)
                .then(data =>  window.location.pathname = '/')
        }else if(requestTwo.data){
            successMessage(requestTwo.data)
                .then(data =>  window.location.pathname = '/')
        }else errorMenssage('Upss, Alparecer hubo problemas, intentalo de nuevo mas tarde')
    }
}
// if(verifyToken === null) return (<h1>Cargando</h1>)
// else if(verifyToken === false){
//     return <Navigate to='/' />
// }else 
return(   
    <div className={DivContainerForm}> 
        <form 
        onSubmit={hanldeOnSubimt}
        className={form}>
            <h3 className={title}>Nueva Contraseña</h3>
            <InputsPasswords 
            handleInputChange={handleInputChange}
            errors={errors}
            state={passwords}
            />
            <input 
            className={buttonSubmit}
            type='submit' 
            value='Actualizar'
            disabled={errors.password || errors.repeatPassword? true : false } 
            />
        </form>   
        <div className={imgDiv}>
            <div className={imgDivContainer}>
                <img 
                className={img}
                src='https://res.cloudinary.com/dcdywqotf/image/upload/v1676483326/Cerebritos%20svg/Cerebrito_alegre_ec68ls.svg'
                alt='cerebrito'
                />
            </div>
        </div>
    </div>
    )
}

export default ForgotPassword;