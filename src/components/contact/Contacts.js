import React from "react";
import ContactsForm from "./contacts-form/ContactsForm";
import ContactsList from "./contact-list/ContactList";
import ContactsFilter from "./contacts-filter/ContactsFilter";

const Contacts = () => {
  return (
    <>
      <ContactsForm />
      <ContactsFilter />
      <ContactsList />
    </>
  );
};

export default Contacts;
