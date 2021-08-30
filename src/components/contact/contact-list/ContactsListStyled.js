import styled from "styled-components";

const ContactsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 10px 0 50px 0;

  .items {
    color: #c12127;
  }
  .items:not(:last-child) {
    margin-bottom: 20px;
  }
  .button {
    width: 100px;
    margin-left: 10px;
    padding: 5px;
    color: #ff4b01;
    background-color: transparent;
    border: 1px solid #ff4b01;
    border-radius: 5px;

    transition: 500ms;
    outline: none;
  }
  .button:focus {
    color: #c12127;
    border-color: #c12127;
    box-shadow: 0px 1px 13px 0px #c12127;

    transform: scale(1.05);
  }
  .button:hover {
    color: #c12127;
    border-color: #c12127;
    box-shadow: 0px 1px 13px 0px #c12127;

    transform: scale(1.05);
  }
`;
export default ContactsListStyled;
