const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addPeople: (state, action) => {
      state = [...action.payload];
      console.log(state);
    },
  },
});

export const { addPeople } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
