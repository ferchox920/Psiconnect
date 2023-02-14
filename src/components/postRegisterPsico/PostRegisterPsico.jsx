import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getOnlyAreas, getSkills, verifyTokenPostRegister, postRegisterProfesional, autoLoginAfterPostRegister } from '../../features/apiPetitions';
import { errorMenssage, successMessage } from '../../features/errorsModals.js'
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
        const newImage = await uploadImage(register.avatar)
        const request = await postRegisterProfesional({
            ...register,
            avatar: newImage
        },token)
        if(request.status === 201) {
            successMessage(request.data.message).then(()=>{
                autoLoginAfterPostRegister(request.data.token)
            })
         }else if(request.status === 500){
            errorMenssage('upss, Alparecer hubo problemas, intentalo mas tarde')
         }else errorMenssage(request.response.data.data)
    }   else errorMenssage(Object.values(errors).join(', ')|| 'Porfavor completa todos los campos del formulario')
};
const handleInputDeletedAvatar = () => {
    if(register.avatar && register.avatarIMG){ 
        setRegister({
            ...register,
                avatar:'',
                avatarIMG:'',
                altIMG:''
        })
    }
};
const handleInputChangeAvatar = (e) =>{
    if(errors.avatar) delete errors.avatar
    if(e.target.files[0]){
        setRegister({
            ...register,
            avatar : e.target.files[0],
            avatarIMG : URL.createObjectURL(e.target.files[0]),
            altIMG : e.target.files[0].name
        })
    }
};
const handleInputChange = (e) => {
    if(e.target.name === 'linkedin' && errors.linkedin) delete errors.linkedin
    setRegister({
        ...register,
        [e.target.name] : e.target.value,
    })
    if(e.target.name === 'description'){
        setErrors(
            validationsForm.description(
                {   ...register,
                    [e.target.name] : e.target.value,
                }
        ))
    }
};
const handleInputSelectChange = ( e, keyName ) =>{
    const values =  e.target.value.split(",");

    if(!areas.some(el => el.area === values[0]) && !skills.some(el => el.skill === values[0])) return

    let option = document.querySelector(`#${values[0]}`)

    if(errors[keyName]) delete errors[keyName]

    
    if(!register[keyName].some((el)=> el.name === values[0])){
        setRegister({
        ...register,
        [keyName] : register[keyName].concat({name : values[0], id: values[1]}),
        })
        option.disabled = true;
    }else{
        setRegister({
            ...register,
            [keyName] : register[keyName].filter(el=> el.name !== values[0])
            })
        option.disabled = false;
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
            <form className={style.form} onSubmit={(e)=>{handleOnSubmit(e)}}>

                <label className={style.labelInicio} >Avatar</label>
                <p className={style.p}>*selecciona un imagen para tu foto de perfil</p>
                <span className={style.errorsText}>
                    {errors.avatar}
                </span>
                <div className={style.divContainerImg}>
                    <div className={style.divAvatar}>
                        <img 
                        className={style.avatar}
                        src={register.avatarIMG}
                        alt={register.altIMG || 'IMG'}
                        />
                    </div>
                    <div className={style.divInputsImage}>
                        <input
                        className={errors.avatar?style.inputAvatarError :style.inputImage}
                        id='imageAvatar'
                        type="file" 
                        accept="image/*"
                        name="avatar"
                        value={register.avatar? register.avatarIMG.name : ''}
                        onChange={ handleInputChangeAvatar }
                        />
                        <input
                        className={register.avatar? style.inputImage : style.inputImageDisabled}
                        id='deleteImageAvatar'
                        type='button'
                        name='avatar'
                        value='Borrar imagen'
                        disabled={register.avatar? false : true}
                        onClick={handleInputDeletedAvatar}
                        />
                    </div>
                </div>

                <label className={style.label}>Descripcion</label>
                <p className={style.p}>
                    *escribe una breve descripción de tu perfil como profesional
                    <br/>
                    *CONSEJO* trata de añadir datos que creas importantes y relevantes de tu perfil
                </p>
                <span className={style.errorsDescription}>{errors.description}</span>
                <div className={errors.description? style.errorsDescriptionContainer : style.containerDescription}>
                <textarea 
                name="description"
                value={register.description} 
                placeholder='Descripcion'
                className={style.description}
                onChange={handleInputChange}>
                </textarea>
                </div>

                <label className={style.label}>Areas</label>
                <p className={style.p}>*selecciona las areas en las que trbajas</p>
                <span className={style.errorsText}>{errors.areas}</span>
                <select 
                className={errors.areas? style.errorsSelect : style.select}
                name="areas" 
                onChange={(e)=>handleInputSelectChange(e, 'areas')}  
                required>
                    <option
                    key='areas' 
                    value='Areas'
                    selected 
                    disabled
                    >Areas</option>
                    {   
                        areas.map(el=>{
                            return(
                                <option
                                key={el.id} 
                                value={[el.area, el.id]}
                                id={el.area}>
                                {el.area}
                                </option>
                            )
                        })
                    }
                </select>
                <div className={style.divSkills}>
                    { 
                        register.areas.map(el => {
                            return(
                                <div key={el.id} className={style.skillsDivSpan}>
                                <span>{el.name}</span>
                                <span 
                                className={style.skillsSpanX} 
                                onClick={()=>handleInputSelectChange( {target:{value:el.name}}, 'areas' ) }>
                                x
                                </span> 
                                </div>
                            )
                        })
                    }
                </div>

                <label className={style.label} >Habilidades</label>
                <p className={style.p}>*selecciona las habilidades que consideras tener</p>
                <span className={style.errorsText}>{errors.skills}</span>
                <select 
                className={errors.skills? style.errorsSelect : style.select}
                name="area" 
                onChange={(e)=>handleInputSelectChange(e,'skills')} 
                required
                defaultValue={'defaultSelect'}
                >
                    <option
                    key='skills' 
                    value='Skills'
                    selected 
                    disabled>
                    Habilidades
                    </option>
                    {   
                        skills.map(el=>{
                            return(
                                <option 
                                key={el.id} 
                                id={el.skill} 
                                value={[el.skill, el.id]}> 
                                {el.skill}
                                </option>
                            )
                        })
                    }
                </select>
                <div className={style.divSkills}>
                    { 
                        register.skills.map(el=>{
                            return(
                                <div key={el.id} className={style.skillsDivSpan}>
                                    <span>{el.name}</span>
                                    <span 
                                    className={style.skillsSpanX} 
                                    onClick={ ()=>handleInputSelectChange( {target:{value:el.name}},'skills' ) }>
                                        x
                                    </span> 
                                </div>
                            )
                        })
                    }
                </div>

                <label className={style.label} >Linkedin</label>
                    <p className={style.p}>*copie y pega el link de tu perfil de Linkedin</p>
                    <span className={style.errorsText}>{errors.linkedin}</span>
                <input
                className={errors.linkedin? style.inputsErrors :style.inputs}
                type="text" 
                name='linkedin'
                value={register.linkedin}
                placeholder='https://www.linkedin.com/in/...'
                onChange={handleInputChange}
                />
                <input 
                disabled={inputErrorChecker()}
                className={inputErrorChecker()? style.inputSubmitDisabled : style.inputSubmit }
                type='submit' 
                value='Actualizar' 
                />

            </form>
        </div>
    )
}
export default PostRegisterPsico;
