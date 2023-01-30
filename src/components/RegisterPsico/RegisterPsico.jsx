import { useEffect, useState } from 'react';


export default function RegisterPsico() {
  
const [ register, setRegister ] = useState({
    name:'',
    lastName:'',
    email:'',
    DNI:'',
    avatar:'',
    avatarIMG:'',
    password:'',
    repeatPassword:''
})

useEffect(()=>{
    let img = document.querySelector('#deleteImageAvatar')
    if(register.avatar === ''){
        img.disabled = true;
    }else{
        img.disabled = false;
    }
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
const handleInputChange = (e) => {
    setRegister({
        ...register,
        [e.target.name] : e.target.value,
    })
}
const handleInputChangeAvatar = (e) =>{
    if(!e.target.files[0]) return
    setRegister({
        ...register,
        [e.target.name] : e.target.files[0],
        avatarIMG: URL.createObjectURL(e.target.files[0])
    })
}
return (
    <form onSubmit={() => alert('se creo la cuenta')}>
        <label>Nombres</label>
            <input 
            type="text"
            name="name" 
            placeholder='Nombres' 
            value={register.name}
            onChange={(e)=>handleInputChange(e)} 
            required/>

        <label>Apellidos</label>
            <input 
            type="text"
            name="lastName" 
            placeholder='Apellidos' 
            value={register.lastName}
            onChange={(e)=>handleInputChange(e)} 
            required/>

        <label>Email</label>
            <input 
            type="email" 
            name="email"
            placeholder='email' 
            value={register.email}
            onChange={(e)=>handleInputChange(e)} 
            required/>

        <label>DNI/Pasaporte</label>
            <input 
            type="text"
            name="DNI" 
            placeholder="numero de DNI/Pasaporte" 
            value={register.DNI}
            onChange={(e)=>handleInputChange(e)}  
            required />

        <label>Avatar</label>
            <img 
            width="200" 
            height="200"
            src={register.avatarIMG}
            />
            <input
            id='imageAvatar'
            type="file" 
            accept="image/*"
            name="avatar"
            onChange={ (e) => handleInputChangeAvatar(e) }
            required/>
            <input
            id='deleteImageAvatar'
            type='button'
            name='avatar'
            value='Borrar imagen'
            onClick={handleInputDeletedAvatar}
            />

        <label>Contraseña</label>    
            <input
            type="password"
            name="password"
            value={register.password}
            placeholder='Repetir contraseña'
            onChange={(e)=>handleInputChange(e)}
            required />

        <label>Repetir contraseña</label>    
            <input 
            type="password"
            name="repeatPassword"
            value={register.repeatPassword}
            placeholder='Repetir contraseña'
            onChange={(e)=>handleInputChange(e)} 
            required/>

        <br/>    
            <input 
            type="submit" 
            value="Crear Cuenta"/>
    </form>
  )
}