import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getOnlyAreas, getSkills, verifyTokenPostRegister, postRegisterProfesional } from '../../features/apiPetitions';
import { errorMenssage } from '../../features/errorsModals.js'
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
const [ imageDisabled , setImageDisabled] = useState(false)
const [ tokenVerify, setTokenVerify ] = useState(null)
const [ submitAccepted, setSubmitAccepted ] = useState(false)

useEffect(()=>{
    if(tokenVerify === null || tokenVerify === false) return  

    let img = document.querySelector('#deleteImageAvatar')

    if(register.avatar === '' && !imageDisabled){
        img.disabled = true
        setImageDisabled(true)
    }else{
        img.disabled = false
        setImageDisabled(false)
    }
 },[register.avatar,tokenVerify])

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

const datasErrorChecker = () => {
    const inputsErrors =  validationsForm.inputs(register);
    if(!errorsCheck()) setSubmitAccepted(true)
    else setSubmitAccepted(false)
    setErrors({
        ...errors,
        ...inputsErrors
    })

};
const errorsCheck = () => {
    Object.keys(errors).at(0)? true : false;
};
const handleOnSubmit = (e) => {
    e.preventDefault();
    datasErrorChecker();
    if(!errorsCheck() && submitAccepted){
        postRegisterProfesional(register)
        .then(request => {
            console.log(request)
        }).catch(error => {
            console.log(error)
        })
    }else{
        console.log(errors, submitAccepted)
        errorMenssage(Object.values(errors).join(', ')|| 'Porfavor completa los campos del formulario')
    }    
};
const handleInputDeletedAvatar = () => {
    if(!register.avatar && !register.avatarIMG) return
    setRegister({
        ...register,
            avatar:'',
            avatarIMG:'',
            altIMG:''
    })
    let img = document.querySelector('#imageAvatar')
    img.value = '';
};
const handleInputChangeAvatar = (e) =>{
    if(!e.target.files[0]) return
    if(errors.avatar) delete errors.avatar
    setRegister({
        ...register,
        [e.target.name] : e.target.files[0],
        avatarIMG: URL.createObjectURL(e.target.files[0]),
        altIMG: e.target.files[0].name
    })
    if(e.target.files[0].type.split('/')[0] !== 'image') setErrors({...errors, avatar : 'Seleccione una imagen valida'})  
};
const handleInputChange = (e) => {
    if(errors.linkedin) delete errors.linkedin
    setRegister({
        ...register,
        [e.target.name] : e.target.value,
    })
    if(e.target.name === 'description'){
        setErrors(
            validationsForm.description(
                {   ...errors,
                    [e.target.name] : e.target.value,
                }
        ))
    }
};
const handleInputSkillsChange = (e) =>{
    let optionSkills = document.querySelector(`#${e.target.value}`)
    
    if(errors.skills) delete errors.skills

    if(!register.skills.some((el)=> el === e.target.value)){
        setRegister({
        ...register,
        skills : register.skills.concat(e.target.value),
        })
        optionSkills.disabled = true;
    }else{
        setRegister({
            ...register,
            skills : register.skills.filter(el=> el !== e.target.value)
            })
        optionSkills.disabled = false;
    }
};
const handleInputAreasChange = (e) => {
    let optionAreas = document.querySelector(`#${e.target.value}`)

    if(errors.areas) delete errors.areas

    if(!register.areas.some((el)=> el === e.target.value)){
        setRegister({
        ...register,
        areas : register.areas.concat(e.target.value)
        })
        optionAreas.disabled = true;
    }else{
        setRegister({
            ...register,
            areas : register.areas.filter(el=> el !== e.target.value)
        })
        optionAreas.disabled = false;
    }
};

// if(tokenVerify === null ){
//     return (<h1>Loading</h1>)
// }
// else if(tokenVerify === false){
//     return <Navigate to='/'/>
// }
// else
 return(
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
                            alt={register.altIMG}
                            />
                        </div>
                        <div className={style.divInputsImage}>
                            <input
                            className={errors.avatar?style.inputAvatarError :style.inputImage}
                            id='imageAvatar'
                            type="file" 
                            accept="image/*"
                            name="avatar"
                            onChange={ (e) => handleInputChangeAvatar(e) }
                            />
                            <input
                            className={imageDisabled? style.inputImageDisabled : style.inputImage}
                            id='deleteImageAvatar'
                            type='button'
                            name='avatar'
                            value='Borrar imagen'
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
                    onChange={(e)=>handleInputAreasChange(e)}  
                    required>
                        <option
                        key='areas' 
                        value='defaultSelect'
                        selected 
                        disabled
                        >Areas</option>
                        {   
                            areas.map(el=>{
                                return(
                                    <option
                                    key={el+'1'} 
                                    value={el}
                                    id={el}>
                                    {el}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <div className={style.divSkills}>
                        { 
                            register.areas.map(el=>{
                                return(
                                    <div key={el} className={style.skillsDivSpan}>
                                    <span>{el}</span>
                                    <span 
                                    className={style.skillsSpanX} 
                                    onClick={()=>handleInputAreasChange({target:{value:el}})}>
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
                    onChange={(e)=>handleInputSkillsChange(e)} 
                    required
                    defaultValue={'defaultSelect'}
                    >
                        <option
                        key='skills' 
                        value='defaultSelect'
                        selected 
                        disabled>
                        Habilidades
                        </option>
                        {   
                            skills.map(el=>{
                                return(
                                    <option 
                                    key={el.skill} 
                                    id={el.skill} 
                                    value={el.skill}>
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
                                    <div key={el} className={style.skillsDivSpan}>
                                    <span>{el}</span>
                                    <span 
                                    className={style.skillsSpanX} 
                                    onClick={()=>handleInputSkillsChange({target:{value:el}})}>
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
                    disabled={errorsCheck()? true : false}
                    className={errorsCheck()? style.inputSubmitDisabled : style.inputSubmit }
                    type='submit' 
                    value='Actualizar' 
                    />
            </form>
        </div>
    )
}
export default PostRegisterPsico;
