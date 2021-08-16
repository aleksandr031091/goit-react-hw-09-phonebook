import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContacts,
} from "../../../redux/pfonebook/contactsOperations";
import { getFilteredContact } from "../../../redux/pfonebook/contactsSelectors";
import ContactsListStyled from "./ContactsListStyled";

const ContactList = () => {
  const contacts = useSelector(getFilteredContact);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, number }) => (
        <li className="items" key={id}>
          <span>{name}</span> : <span>{number}</span>
          <button
            className="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ContactsListStyled>
  );
};

export default ContactList;
