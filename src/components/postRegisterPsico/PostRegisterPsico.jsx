import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAreas, getSkills } from '../../features/apiPetitions';
import style from './PostRegisterPsico.module.css'

const PostRegisterPsico = () => {

const [ register, setRegister ] = useState({
    linkedin:'',
    description:'',
    profesion:'',
    area:'',
    avatar:'',
    avatarIMG:'',
    skills:[]
})
const [ areas, setAreas ] = useState([])
const [ skills, setSkills ] = useState([])

useEffect(()=>{
    let img = document.querySelector('#deleteImageAvatar')
    if(register.avatar === '') img.disabled = true
    else img.disabled = false;
 },[register.avatar])

useEffect(()=>{
    getAreas(setAreas)
    getSkills({
        state:setSkills,
        type:'local'
    })
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
        skills : register.skills.concat(e.target.value)
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
console.log(register)
    return(
        <div className={style.divContainer}>
            <form className={style.formProfessionalRegister}>

                <label>Avatar</label>
                        <img 
                        className={style.avatar}
                        src={register.avatarIMG}
                        alt='imgAvatar'
                        />
                    <div>
                    <input
                        id='imageAvatar'
                        type="file" 
                        accept="image/*"
                        name="avatar"
                        onChange={ (e) => handleInputChangeAvatar(e) }
                        />
                        <input
                        id='deleteImageAvatar'
                        type='button'
                        name='avatar'
                        value='Borrar imagen'
                        onClick={handleInputDeletedAvatar}
                        />
                    </div>
                    <br/>

                    <label>Area</label>
                    <select 
                    name="area" 
                    onChange={(e)=>handleInputChange(e)} 
                    required>
                        <option
                        key='defaultSelect' 
                        value='defaultSelect'
                        selected 
                        disabled
                        >seleccionar</option>
                        {   
                            areas.map(el=>{
                                return(
                                    <option key={el.area} value={el.area} >{el.area}</option>
                                )
                            })
                        }
                    </select>
                    <br/>

                    <label>Description</label>
                    <input 
                    type="text" 
                    name='description'
                    value={register.description}
                    placeholder='Description'
                    className={style.description}
                    onChange={handleInputChange}
                    />
                    <input
                    type="text" 
                    name='profesion'
                    value={'desactivado'||register.profesion}
                    placeholder='Profesión'
                    onChange={handleInputChange}
                    />
                    <input
                    type="text" 
                    name='linkedin'
                    value={register.linkedin}
                    placeholder='https://www.linkedin.com/in/'
                    onChange={handleInputChange}
                    />

                    <label>Habilidades</label>
                    <select 
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
            </form>
        </div>
    )
}
export default PostRegisterPsico;