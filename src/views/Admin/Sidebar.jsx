import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {  Menu, MenuItem, Sidebar} from 'react-pro-sidebar'
import { sidebarClasses, menuClasses } from 'react-pro-sidebar'
import { Avatar } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'

export default function SideBar() {
  const user = useSelector((store) => store.user.user)
  const {section} = useParams()
  const navigate = useNavigate()
  return (
    <Sidebar rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor:'#afcecf',
        position:'fixed',
        height:'100vh',
        width:'14%',
      },
    }}>
        <Menu
        rootStyles={{
          [`.${menuClasses.button}`]: {
            ":hover":{
              backgroundColor:'#5f9ea0',
              border:'solid',
              borderColor:'#436e70'
            },
          },
          ul: {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            paddingTop:'15px'
          },
          [`.${menuClasses.active}`]: {
            a:{backgroundColor:'#5f9ea0',
              border:'solid',
              borderColor:'#436e70'
            }
            
          }  
        }}
        
        
        >
            {user &&
              <Avatar
                sx={{width:150, height:150}}
                src={user.avatar || 'https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?pid=ImgDet&rs=1'} 
                alt={user.name}>
              </Avatar>
            }
            <MenuItem onClick={() => navigate('/admin/users')} active={section === 'users' ? true : false}> Usuarios </MenuItem>
            <MenuItem onClick={() => navigate('/admin/professionals')} active={section === 'professionals' ? true : false}> Profesionales </MenuItem>
            <MenuItem onClick={() => navigate('/admin/areas')} active={section === 'areas' ? true : false}> Areas </MenuItem>
            <MenuItem onClick={() => navigate('/admin/skills')} active={section === 'skills' ? true : false}> Skills </MenuItem>
            <MenuItem onClick={() => navigate('/admin/reviews')} active={section === 'reviews' ? true : false}> Reviews </MenuItem>
            <MenuItem onClick={() => navigate('/admin/payments')} active={section === 'payments' ? true : false}> Ingresos </MenuItem>
            <MenuItem onClick={() => navigate('/admin/consults')} active={section === 'consults' ? true : false}> Citas </MenuItem>
        </Menu>
    </Sidebar>
  )
}
