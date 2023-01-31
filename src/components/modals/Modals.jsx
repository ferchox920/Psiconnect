import React from 'react'
import LoginUser from '../LoginUser/LoginUser'

export default function RegisterUser({name}) {

    switch(name){
        case 'loginUser':
        return( <LoginUser />)
    }
  return (
  <div>
    
  </div>
  )
}
