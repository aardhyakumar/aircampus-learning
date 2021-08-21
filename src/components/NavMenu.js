import React from "react";
import styled from "styled-components";
function NavMenuPrime() {
  return (
    <NewMenu>
      <a>
        <span>Todo</span>
      </a>

      <a>
        <span>Forums</span>
      </a>
      <a>
        <span>Feed</span>
      </a>
    </NewMenu>
  );
}

export default NavMenuPrime;
const NewMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #444444;
  position: relative;
  width:150vw;
  top: 11.8vw;
  @media only screen and (min-width: 900px) {
    display: none;
`;
