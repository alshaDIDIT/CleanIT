import styled from "styled-components";

const StyledHome = styled.div`

  div:first-child {
    width: 100%;
    height: 50vh;
  }

  div:nth-child(2) {
    background-color: rgba(0, 0, 0, 0.75);
    //height: 30vh;
    padding-top: 50px;
  }

  div:nth-child(2) h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
    color: aliceblue;
  }

  div:nth-child(2) span {
    display: flex;
  }

  #myVideo {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
`

export default StyledHome;
