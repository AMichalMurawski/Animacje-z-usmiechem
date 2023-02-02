import offerList from '../../data/offer.json';
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    showMenu: false,
    offerType: null,
    offerContent: '',
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
    changeOffer: {
      reducer(state, action) {
        state.offerType = action.payload;
      },
    },
    offerDescription: {
      reducer(state, action) {
        const offer = offerList.filter(
          offerElement => offerElement.id === action.payload.offerType
        );
        state.offerContent = offer;
      },
    },
  },
});

export const { openMenu, hideMenu, changeOffer, offerDescription } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
