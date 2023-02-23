import {configureStore} from '@reduxjs/toolkit'
import chatSlice from '../features/chatSlice'
import professionalSlice from '../features/professionalSlice'
import userSlice from '../features/userSlice'
import globalSlice from '../features/gobalSlice'


export default configureStore({
    reducer: {
        professionals:professionalSlice,
        user:userSlice,
        chats:chatSlice,
        global: globalSlice
    }
})