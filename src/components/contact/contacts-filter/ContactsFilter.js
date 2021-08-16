import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../../redux/pfonebook/contactsSelectors";
import { filterContact } from "../../../redux/pfonebook/contactsActions";
import ContactsFilterStyled from "./ContactsFilterStyled";

const FilterContact = () => {
  const value = useSelector(filterSelector);

  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <ContactsFilterStyled>
      <label className="label">
        Find contacts by name
        <input
          className="input"
          type="text"
          value={value}
          onChange={onHandleChange}
        />
      </label>
    </ContactsFilterStyled>
  );
};

export default FilterContact;
