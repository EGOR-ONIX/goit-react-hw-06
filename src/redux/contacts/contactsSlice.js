import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;

//! Vanilla Redux
// export const contactsReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }
//     case "contacts/deleteContact": {
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload
//           ),
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const addContact = (contact) => {
//   return {
//     type: "contacts/addContact",
//     payload: { ...contact },
//   };
// };

// export const deleteContact = (contactId) => {
//   return {
//     type: "contacts/deleteContact",
//     payload: contactId,
//   };
// };
