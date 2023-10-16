import {configureStore} from '@reduxjs/toolkit';
import todoreducer from '../Feature/todoSlice'

export const Store = configureStore({
    reducer : todoreducer
})