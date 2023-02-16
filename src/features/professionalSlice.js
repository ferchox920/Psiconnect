import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 AllProfessional:[],
 FilterProfessional:[],
};

const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    setAllProfessional(state, { payload }) {
        state.AllProfessional = payload;
      },
    setFilterProfessional(state, { payload }) {
      console.log(payload, 'aqui2')
        state.FilterProfessional = payload;
      },
  },
});
export const {
    setAllProfessional,
    setFilterProfessional,
    setProfessional
} = professionalSlice.actions;
export default professionalSlice.reducer;