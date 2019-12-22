import styled from "styled-components";

export const Nav = styled.nav.attrs({ className: "valign-wrapper" })`
  && {
    background: #008080;
    padding-left: 50px;
    > a {
      h4 {
        padding-top: 5px;
        margin: 0;
      }
    }
  }
`;
