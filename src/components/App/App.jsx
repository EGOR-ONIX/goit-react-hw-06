import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

function App() {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <h2 className={css.subtitle}>New contact</h2>
      <ContactForm />
      <h2 className={css.subtitle}>Contacts</h2>
      {contacts.length === 0 ? (
        <p className={css["no-contacts"]}>The contact list is empty!</p>
      ) : (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}
    </>
  );
}

export default App;
