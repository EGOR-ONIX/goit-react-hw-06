import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsSlice";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css["contact-list"]}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css["contact-item"]}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={(contactId) => dispatch(deleteContact(contactId))}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
