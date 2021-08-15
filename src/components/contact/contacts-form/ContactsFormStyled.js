import styled from "styled-components";

const ContactsFormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  width: 500px;

  border: 1px solid #cc3a00;
  border-radius: 10px;
  box-shadow: 0px 1px 13px 0px #b63a00;

  .label {
    margin-left: auto;
    margin-bottom: 20px;

    color: #ff4b01;
  }
  .input {
    width: 300px;
    margin-left: 10px;
    padding: 5px;
    font-size: 15px;

    border-color: #ff4b01;
    border-radius: 5px;
    outline: none;
  }

  .input:focus {
    border-color: #c12127;
  }
  .input:hover {
    border-color: #c12127;
  }
  .input::placeholder {
    color: #03c081;
  }
  .button {
    width: 100px;
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
  .alert {
    margin-top: 0;
    font-weight: 700;
    color: #af02ff;
  }
`;

export default ContactsFormStyled;
