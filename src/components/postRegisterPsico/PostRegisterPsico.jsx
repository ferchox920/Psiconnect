import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getOnlyAreas, getSkills, verifyTokenPostRegister } from '../../features/apiPetitions';
import style from './PostRegisterPsico.module.css'

const PostRegisterPsico = () => {
  
const query = new URLSearchParams(useLocation().search);
const token = query.get('tkn')

const [ register, setRegister ] = useState({
    linkedin:'',
    description:'',
    areasObjects:[],
    areas:[],
    avatar:'',
    avatarIMG:'',
    skillsObjects:[],
    skills:[]
})
const [errors, setErros ] = useState({})
const [ areas, setAreas ] = useState([])
const [ skills, setSkills ] = useState([])
const [ imageDisabled , setImageDisabled] = useState(false)
const [ tokenVerify, setTokenVerify ] = useState(null)
const [ verification, setVerification ] = useState(null)

useEffect(()=>{
    if(tokenVerify === null || tokenVerify === false) return window.location.pathname = '/'; 

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
    verifyTokenPostRegister({
        state: setVerification,
        token:token,
        type:'local'
    })
},[])

useEffect(()=>{
    if(verification?.status === 204) setTokenVerify(true)
    else if(verification !== null) setTokenVerify(false)
},[verification])

const handleInputDeletedAvatar = () => {
    if(!register.avatar && !register.avatarIMG) return
    setRegister({
        ...register,
            avatar:'',
            avatarIMG:''
    })
    let img = document.querySelector('#imageAvatar')
    img.value = '';
}
const handleInputChangeAvatar = (e) =>{
    if(!e.target.files[0]) return
    setRegister({
        ...register,
        [e.target.name] : e.target.files[0],
        avatarIMG: URL.createObjectURL(e.target.files[0])
    })
}
const handleInputChange = (e) => {
    console.log(register)
    setRegister({
        ...register,
        [e.target.name] : e.target.value,
    })
    console.log(register)
}
const handleInputSkillsChange = (e) =>{
    let optionSkills = document.querySelector(`#${e.target.value}`)

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
} 
const handleInputAreasChange = (e) => {
    let optionAreas = document.querySelector(`#${e.target.value}`)

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
}

if(tokenVerify === null ){
    return (<h1>Loading</h1>)
}
else if(tokenVerify === false){
    return <Navigate to='/'/>
}
else return(
        <div className={style.divContainer}>
            <form className={style.form} onSubmit={(e)=>{console.log('se subio'); e.preventDefault()}}>
                <label className={style.labelInicio} >Avatar</label>
                    <p className={style.p}>*selecciona un imagen para tu foto de perfil</p>
                    <div className={style.divContainerImg}>
                        <div className={style.divAvatar}>
                            <img 
                            className={style.avatar}
                            src={register.avatarIMG}
                            alt='imgAvatar'
                            />
                        </div>
                        <div className={style.divInputsImage}>
                            <input
                            className={style.inputImage}
                            id='imageAvatar'
                            type="file" 
                            accept="image/*"
                            name="avatar"
                            onChange={ (e) => handleInputChangeAvatar(e) }
                            />
                            <input
                            className={imageDisabled? style.inputImageDisabled: style.inputImage}
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
                    <div className={style.containerDescription}>
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
                    <select 
                    className={style.select}
                    name="areas" 
                    onChange={(e)=>handleInputAreasChange(e)}  
                    required>
                        <option
                        key='defaultSelect' 
                        value='defaultSelect'
                        selected 
                        disabled
                        >Areas</option>
                        {   
                            areas.map(el=>{
                                return(
                                    <option
                                    key={el} 
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
                                    <div className={style.skillsDivSpan}>
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
                    <select 
                    className={style.select}
                    name="area" 
                    onChange={(e)=>handleInputSkillsChange(e)} 
                    required>
                        <option
                        key='defaultSelect' 
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
                                    <div className={style.skillsDivSpan}>
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
                    <input
                    className={errors.linkedin? style.inputsErrors :style.inputs}
                    type="text" 
                    name='linkedin'
                    value={register.linkedin}
                    placeholder='https://www.linkedin.com/in/...'
                    onChange={handleInputChange}
                    />

                    <input 
                    className={style.inputSubmit}
                    type='submit' 
                    value='Actualizar' 
                    />
            </form>
        </div>
    )
}
export default PostRegisterPsico;
