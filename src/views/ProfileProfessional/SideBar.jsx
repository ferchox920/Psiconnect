import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar'
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
            <MenuItem onClick={() => navigate('/professionalProfile/profile')} active={section === 'profile' ? true : false}> Perfil </MenuItem>
            <MenuItem onClick={() => navigate('/professionalProfile/arrangements')} active={section === 'arrangements' ? true : false}> Citas </MenuItem>
            <MenuItem onClick={() => navigate('/professionalProfile/incomes')} active={section === 'incomes' ? true : false}> Ingresos </MenuItem>
            <MenuItem onClick={() => navigate('/professionalProfile/security')} active={section === 'security' ? true : false}> Seguridad </MenuItem>
        </Menu>
    </Sidebar>
  )
}
