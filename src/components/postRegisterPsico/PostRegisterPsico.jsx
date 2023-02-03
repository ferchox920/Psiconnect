import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './PostRegisterPsico.css'

const PostRegisterPsico = () => {

const [ register, setRegister ] = useState({
    linkedin:'',
    description:'',
    skills:[],
    Profesión:'',
    avatar:'',
    avatarIMG:''
})

useEffect(()=>{
    let img = document.querySelector('#deleteImageAvatar')
    if(register.avatar === '') img.disabled = true
    else img.disabled = false;
 },[register.avatar])

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

    return(
        <div>
            <form>
                <label>Avatar</label>
                <div>
                    <img 
                    className={avatar}
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
                </div> 
            </form>
        </div>
    )
}
export default PostRegisterPsico;