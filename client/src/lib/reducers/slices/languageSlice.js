import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name:'language',
    initialState:{
        isEnglish: true,
        isSpanish:false,
    },
    reducers:{
        setIsEnglish: (state,action) =>{
            state.isEnglish = action.payload;
            state.isSpanish = false;
        },
        setIsSpanish: (state,action) =>{
            state.isSpanish = action.payload;
            state.isEnglish = false;
        }
    }
});

export const {
    setIsEnglish,
    setIsSpanish
} = languageSlice.actions;

export default languageSlice.reducer;