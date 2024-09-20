import { createSlice,current } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./configureStore";

interface IFilters {
  // filters:{
    onlyActive:boolean
  }  
// }


const initialFilterParams:IFilters = {
  // filters:{
    onlyActive:false,
}
// }
export const filterSlice = createSlice({
    name:'filters',
    initialState:initialFilterParams,
    reducers:{
      toggleOnlyActive(state){
        state.onlyActive = !state.onlyActive
      },
      updateFilterParams(state,action:PayloadAction<{key:keyof IFilters,value:string | boolean}>){
      // updateFilterParams(state,action:PayloadAction<{key:string,value:string | boolean}>){
        console.log('act',action.payload)
        console.log('prevState',state)
        console.log('current:',current(state))
        const currentState = current(state)
        // state = {...state,[action.payload.key]:action.payload.value}
        // state[action.payload.key] = action.payload.value

        console.log('new state:',state)
      }
    }
})

export default filterSlice.reducer

export const {toggleOnlyActive,updateFilterParams} = filterSlice.actions 

export const isOnlyActive = (state:RootState) => state.filters.onlyActive