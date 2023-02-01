import {configureStore} from '@reduxjs/toolkit'
import professionalSlice from '../features/professionalSlice'

export default configureStore({
    reducer: {
        professionals:professionalSlice
    }
})