import styled from "styled-components";
import { Link } from "react-router-dom";

export const Collection = styled.div.attrs({ className: "collection" })`
  width: 70%;
  margin: 30px auto;
`;
export const UsersListLink = styled(Link).attrs({
  className: "collection-item white-text"
})`
  && {
    background: transparent;
    font-weight: bold;
    &:not(.active):hover {
      background: #008080 !important;
    }
  }
`;
