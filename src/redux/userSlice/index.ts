import { createSlice } from "@reduxjs/toolkit"

interface UserState {
    // user: API
}
const initialState: UserState & {loading:boolean} = {
    // name: "",
    loading:false,
}
  


export const userSlice = createSlice({
    name: 'user',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
      // Use the PayloadAction type to declare the contents of `action.payload`
    },
})