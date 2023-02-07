import {configureStore} from '@reduxjs/toolkit'
import chatSlice from '../features/chatSlice'
import professionalSlice from '../features/professionalSlice'
import userSlice from '../features/userSlice'

export default configureStore({
    reducer: {
        professionals:professionalSlice,
        user:userSlice,
        chats:chatSlice
    }
})