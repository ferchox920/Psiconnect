import React from 'react'
import style from './ProfileUser.module.css'
import { useSelector } from 'react-redux'
export default function ProfileUser () {
    const users = useSelector(state => state.user.user)
    console.log(users, 'aqui')








  return (
    <div className = {style.container}>
        <div className={style.sidebar}>
            <div className = {style.avatar}><img   src = {users.avatar !== null ? users.avatar : users.name} alt = ''/></div>
            <h1 className = {style.username}>{`${users.name} ${users.lastName}`}</h1>
        </div>

    </div>
  )
}


