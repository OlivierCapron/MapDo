import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantSelectionne: null
  },

  reducers: {

    setRestaurantSelectionne: (state, action) => {
      state.restaurantSelectionne = action.payload;
    }

  }
});

export const { setRestaurantSelectionne } = restaurantSlice.actions;

export default restaurantSlice.reducer;