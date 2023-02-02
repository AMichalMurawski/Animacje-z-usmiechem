const { createSlice } = require('@reduxjs/toolkit');

const userSlice = createSlice({
  name: 'user',
  initialState: {
    showMenu: false,
  },
  reducers: {
    openMenu: {
      reducer(state) {
        state.showMenu = true;
      },
    },
    hideMenu: {
      reducer(state) {
        state.showMenu = false;
      },
    },
  },
});

export const { openMenu, hideMenu } = userSlice.actions;
export const userReducer = userSlice.reducer;
