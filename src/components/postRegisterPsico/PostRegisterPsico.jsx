import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAreas } from '../../features/apiPetitions';
import './PostRegister.css'

const PostRegisterPsico = () => {

const [ register, setRegister ] = useState({
    linkedin:'',
    description:'',
    Profesión:'',
    area:'',
    avatar:'',
    avatarIMG:'',
    skills:[]
})
const [ areas, setAreas ] = useState([])

useEffect(()=>{
    let img = document.querySelector('#deleteImageAvatar')
    if(register.avatar === '') img.disabled = true
    else img.disabled = false;
 },[register.avatar])

useEffect(()=>{
    getAreas({
        state: setAreas,
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
    console.log(e.target.name, e.target.value)
    setRegister({
        ...register,
        [e.target.name] : e.target.value,
    })
    console.log(register)
}
    return(
        <div>
            <form className='formProfessionalRegister'>
                <label>Avatar</label>
                        <img 
                        className='avatar'
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
                    <select name="area" onChange={(e)=>handleInputChange(e)} required>
                        <option key='defaultSelect' value='defaultSelect' selected disabled>seleccionar</option>
                    {   areas.map(el=>{
                            return(
                                <option key={el.area} value={el.area} >{el.area}</option>
                            )
                        })
                    }
                    </select>
            </form>
        </div>
    )
}
export default PostRegisterPsico;