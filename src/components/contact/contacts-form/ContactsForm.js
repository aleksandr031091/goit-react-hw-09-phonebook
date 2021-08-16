import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  alertContacts,
  resetAlert,
} from "../../../redux/pfonebook/contactsActions";
import { addContact } from "../../../redux/pfonebook/contactsOperations";
import {
  alertSelector,
  contactsSelector,
} from "../../../redux/pfonebook/contactsSelectors";
import ContactsFormStyled from "./ContactsFormStyled";

const initialState = { name: "", number: "" };

const ContactsForm = () => {
  const [state, setState] = useState(initialState);

  const contacts = useSelector(contactsSelector);

  const alert = useSelector(alertSelector);

  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    if (alert) {
      dispatch(resetAlert());
    }
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.some(({ name, number }) =>
        [name, number].some(
          (item) =>
            item.toUpperCase() === state.name.toUpperCase() ||
            item.toUpperCase() === state.number.toUpperCase()
        )
      )
    ) {
      dispatch(
        alertContacts(
          `Contact ${state.name.toLocaleUpperCase()} is already in contacts`
        )
      );
    } else {
      dispatch(
        addContact({
          ...state,
        })
      );
      setState({ ...initialState });
    }
  };

  return (
    <ContactsFormStyled onSubmit={onHandleSubmit}>
      <p className="alert">{alert}</p>
      <label className="label">
        Name
        <input
          className="input"
          type="text"
          name="name"
          value={state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onHandleChange}
          placeholder="Jacob Mercer"
        />
      </label>
      <label className="label">
        Phone
        <input
          className="input"
          type="tel"
          name="number"
          value={state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onHandleChange}
          placeholder="+380993333333"
        />
      </label>
      <button className="button" type="submit">
        Add contact
      </button>
    </ContactsFormStyled>
  );
};

export default ContactsForm;
