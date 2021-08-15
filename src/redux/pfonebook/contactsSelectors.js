import { createSelector } from "@reduxjs/toolkit";

export const contactsSelector = (state) => state.contactsItem.contacts;
export const filterSelector = (state) => state.contactsItem.filter;
export const loadingSelector = (state) => state.contactsItem.loading;
export const errorSelector = (state) => state.contactsItem.error;
export const alertSelector = (state) => state.contactsItem.alert;

export const getFilteredContact = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter((contact) =>
      contact.name.toUpperCase().includes(normalizedFilter)
    );
  }
);
