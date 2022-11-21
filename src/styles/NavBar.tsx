// @ts-ignore
import styled, { css } from "styled-components";

const NavBar = styled.form`
  width: 100%;
  height: 100px;
  background-color: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    margin-left: 50px;
    color: aliceblue;
    font-weight: 100;
  }
  
  div {
    margin-right: 50px;
    font-size: 20px;
  }
`

export default NavBar;
