import {configureStore} from '@reduxjs/toolkit'
import professionalSlice from '../features/professionalSlice'
import userSlice from '../features/userSlice'

export default configureStore({
    reducer: {
        professionals:professionalSlice,
        user:userSlice
    }
})