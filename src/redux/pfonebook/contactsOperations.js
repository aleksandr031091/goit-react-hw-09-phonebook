import axios from "axios";
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from "../pfonebook/contactsActions";

export const getContacts = () => async (dispatch, getState) => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get("/contacts", {
      headers: { Authorization: `Bearer ${getState().auth.idToken}` },
    });

    dispatch(getContactsSuccess(response.data));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = (contact) => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const response = await axios.post("/contacts", contact);

    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }
};

export const deleteContact = (id) => async (dispatch) => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete("/contacts/" + id);

    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }
};

export const updateContact = (id) => async (dispatch) => {
  dispatch(updateContactRequest());
  try {
    const response = await axios.patch("/contacts", id);

    dispatch(updateContactSuccess(response.data));
  } catch (error) {
    dispatch(updateContactError(error.message));
  }
};
