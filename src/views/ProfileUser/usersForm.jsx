import React from 'react'
import { useSelector } from 'react-redux'


export const usersForm = () => {

    const users = useSelector((store) => store.user.user)


  return (
    <div>Form</div>
  )
}
