import dataContacts from "../../data.json";

const INITIAL_STATE = {
  contacts: {
    items: dataContacts,
  },
};

export const contactsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/addContact": {
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/deleteContact": {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    }
    default:
      return state;
  }
};

export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: { ...contact },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};
