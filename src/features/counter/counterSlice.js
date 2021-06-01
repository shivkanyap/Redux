import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: [],
  },
  reducers: {
    addListToRedux: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addListToRedux } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const addListAsync = (list) => (dispatch) => {
  setTimeout(() => {
    dispatch(addListToRedux(list));
  }, 1000);
};

export default counterSlice.reducer;
