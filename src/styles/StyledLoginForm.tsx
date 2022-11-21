// @ts-ignore
import styled, { css } from "styled-components";

const StyledLoginForm = styled.form`
  width: 200px;
  padding: 20px 60px 20px 20px;
  border-radius: 5px;
  background-color: #282c34;
  //opacity: 0;

  input {
    width: 100%;
    text-align: center;
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    border: none;
    border-radius: 50px;
  }

  input::placeholder {
    padding: 10px;
    font-weight: bold;
    opacity: .75;
    text-align: center;
    font-size: 16px;
  }

  input:focus::placeholder {
    color: transparent;
  }
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 5px 10px;
    margin: 10px 0 0 0;
  }
  
  div button {
    padding: 5px 20px;
    font-size: 16px;
    background-color: whitesmoke;
    border: none;
    border-radius: 50px;
    font-family: 'Quicksand', sans-serif;
  }
  
  div a {
    margin-right: -25px;
    font-size: 18px;
  }
`

export default StyledLoginForm;
