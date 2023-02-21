import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getOnlyAreas, getSkills, verifyTokenPostRegister, postRegisterProfesional, autoLoginAfterPostRegister } from '../../features/apiPetitions';
import { errorMenssage, successMessage } from '../../features/errorsModals.js'
import Form from './Form/Form';

import style from './PostRegisterPsico.module.css';
import validationsForm from './validatorDatas.js';

const PostRegisterPsico = () => {
  
const query = new URLSearchParams(useLocation().search);
const token = query.get('tkn')

const [ register, setRegister ] = useState({
    linkedin:'',
    description:'',
    areas:[],
    avatar:'',
    avatarIMG:'',
    altIMG:'',
    skills:[]
})
const [ errors, setErrors ] = useState({})
const [ areas, setAreas ] = useState([])
const [ skills, setSkills ] = useState([])
const [ tokenVerify, setTokenVerify ] = useState(null)
const [ loading, setLoading ] = useState(false)

useEffect(()=>{
    getOnlyAreas(setAreas)
    getSkills({
        state:setSkills,
        type:'local'
    })
    verifyTokenPostRegister(token)
    .then(response => {
        if(response?.status === 204)  setTokenVerify(true)
        if(response?.status !== 204)  setTokenVerify(false)
    })
    .catch(error => {
        setTokenVerify(false)
    })
},[])

const validatorForm = () => {
    const inputsErrors =  validationsForm.inputs(register);
    setErrors({
        ...errors,
        ...inputsErrors
    })
};
const inputErrorChecker = () => {
return  Object.values(register).some(el=> (el === '' || el.length === 0)) &&
            Object.keys(errors).at(0) || Object.keys(errors).at(0)? 
                true : false;
};
const uploadImage = async (file)=>{
    let formData = new FormData();
      formData?.append("file", file);
      formData?.append('upload_preset',"psiconnectpreset");
      formData.append('api_key', 652951616386787);
      
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.cloudinary.com/v1_1/dcdywqotf/image/upload', false);
      xhr.send(formData);
      const imageResponse = JSON.parse(xhr.responseText);
      
      return imageResponse.secure_url
};
const handleOnSubmit = async (e) => {
    e.preventDefault();
    validatorForm();
    if(!inputErrorChecker()){
        setLoading(true)
        const newImage = await uploadImage(register.avatar)
        const request = await postRegisterProfesional({
            ...register,
            avatar: newImage
        },token)
        if(request.status === 202) {
            setLoading(false)
            successMessage(request.data.message).then(()=>{
                autoLoginAfterPostRegister(request.data.token)
            })
         }else if(request.response.status === 500){
            setLoading(false)
            errorMenssage('Upss, Alparecer hubo problemas, intentalo mas tarde')
         }else{
            setLoading(false)
            errorMenssage(request.response.data.data || 'Upss, error inesperado')
        }
    }else{
        setLoading(false)
        errorMenssage(Object.values(errors).join(', ')|| 'Porfavor completa todos los campos del formulario')
    }
};

if(tokenVerify === null ){
  return (<h1>Loading</h1>)
}
else if(tokenVerify === false){
  return <Navigate to='/'/>
}
else return(
    <div className={style.divContainer}>
        {   loading ? 
             <div>
                <h1> CARGANDO</h1>
             </div>
            :
            <Form 
            handleOnSubmit={handleOnSubmit}
            inputErrorChecker={inputErrorChecker}
            state={register}
            setState={setRegister}
            errors={errors}
            setErrors={setErrors}
            areas={areas}
            skills={skills}
            />
        }
    </div>
    )
}
export default PostRegisterPsico;
