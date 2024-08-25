import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

//! Vanilla Redux
// export const filtersReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "filters/changeFilter": {
//       return {
//         ...state,
//         filters: {
//           name: action.payload,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const changeFilter = (payload) => {
//   return {
//     type: "filters/changeFilter",
//     payload,
//   };
// };
