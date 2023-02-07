import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 AllProfessional:[],
 FilterProfessional:[],
 professional:null,
};

const professionalSlice = createSlice({
  name: "professional",
  initialState,
  reducers: {
    setAllProfessional(state, { payload }) {
        state.AllProfessional = payload;
        state.FilterProfessional = payload;
      },
    setFilterProfessional(state, { payload }) {
        state.FilterProfessional = payload;
      },
    setProfessional(state, { payload }) {
        state.professional = payload;
      }
    
  },
});
export const {
    setAllProfessional,
    setFilterProfessional,
    setProfessional
} = professionalSlice.actions;
export default professionalSlice.reducer;