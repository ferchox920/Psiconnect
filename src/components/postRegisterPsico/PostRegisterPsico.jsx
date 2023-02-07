import { useEffect, useState } from 'react';
import { getOnlyAreas, getSkills } from '../../features/apiPetitions';
import style from './PostRegisterPsico.module.css'

const PostRegisterPsico = () => {

const [ register, setRegister ] = useState({
    linkedin:'',
    description:'',
    profesion:'',
    areasObjects:[],
    areas:[],
    avatar:'',
    avatarIMG:'',
    skillsObjects:[],
    skills:[]
})
const [ areas, setAreas ] = useState([])
const [ skills, setSkills ] = useState([])
const [ imageDisabled , setImageDisabled] = useState(false)

useEffect(()=>{
    let img = document.querySelector('#deleteImageAvatar')
    if(!imageDisabled){
        img.disabled = true
        setImageDisabled(true)
    }else{
        img.disabled = false
        setImageDisabled(false)
    }
 },[register.avatar])

useEffect(()=>{
    getOnlyAreas(setAreas)
    getSkills({
        state:setSkills,
        type:'local'
    })
    console.log(areas)
},[])

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
console.log(register)
    return(
            <form className={style.divContainer} onSubmit={(e)=>{console.log('se subio'); e.preventDefault()}}>
                <label className={style.label} >Avatar</label>
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

                    <label className={style.label}>Areas</label>
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

                    <label className={style.label}>Descripcion</label>
                    <div className={style.containerDescription}>
                    <input 
                    type="text" 
                    name='description'
                    value={register.description}
                    placeholder='Description'
                    className={style.description}
                    onChange={handleInputChange}
                    />
                    </div>
                    <input
                    className={style.inputs}
                    type="text" 
                    name='profesion'
                    value={register.profesion}
                    placeholder='Profesión'
                    onChange={handleInputChange}
                    />
                    <input
                    className={style.inputs}
                    type="text" 
                    name='linkedin'
                    value={register.linkedin}
                    placeholder='https://www.linkedin.com/in/'
                    onChange={handleInputChange}
                    />

                    <label className={style.label} >Habilidades</label>
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
                    <input 
                    className={style.inputSubmit}
                    type='submit' 
                    value='Actualizar' 
                    />
            </form>
    )
}
export default PostRegisterPsico;