import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { filterSelector } from "../../../redux/pfonebook/contactsSelectors";
import { filterContact } from "../../../redux/pfonebook/contactsActions";
import ContactsFilterStyled from "./ContactsFilterStyled";

const FilterContact = ({ setNewFilterContacts }) => {
  const value = useSelector(filterSelector);

  // const dispatch = useDispatch();

  const onHandleChange = (e) => {
    setNewFilterContacts(e.target.value);
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

const mstp = (state) => {
  return {
    value: filterSelector(state),
  };
};

export default connect(mstp, { setNewFilterContacts: filterContact })(
  FilterContact
);
