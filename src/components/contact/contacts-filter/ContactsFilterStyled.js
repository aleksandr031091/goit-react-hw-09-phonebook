import styled from "styled-components";

const ContactsFilterStyled = styled.div`
  padding: 30px 0;
  text-align: center;
  .label {
    margin-left: auto;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #0fcc8d;
  }
  .input {
    width: 300px;
    margin-left: 10px;
    padding: 5px;
    font-size: 15px;
    font-weight: 700;
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
`;
export default ContactsFilterStyled;
