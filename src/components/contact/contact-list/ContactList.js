import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import {
  deleteContact,
  getContacts,
} from "../../../redux/pfonebook/contactsOperations";
import { getFilteredContact } from "../../../redux/pfonebook/contactsSelectors";
import ContactsListStyled from "./ContactsListStyled";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <ContactsListStyled>
        {this.props.contacts.map(({ id, name, number }) => (
          <li className="items" key={id}>
            <span>{name}</span> : <span>{number}</span>
            <button
              className="button"
              onClick={() => this.props.deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ContactsListStyled>
    );
  }
}

const mstp = (state) => {
  return {
    contacts: getFilteredContact(state),
  };
};

export default connect(mstp, { deleteContact, getContacts })(ContactList);
