import React from 'react'
import LoginUser from '../LoginUser/LoginUser'
import User from './User'
import './modal.css'

export default function FormModal({name}) {
    switch(name){
        case 'User':
        return( <div className='modal-container'><User /></div>)
        case 'Professional':
        return( <LoginUser />)
    }
}
