import styled from "styled-components";

export const Row = styled.div.attrs({ className: "row" })`
  width: 80%;
  margin: auto;
  @media (max-width: 600px) {
    width: auto;
    margin: auto 0;
  }
`;

export const LeftSideCont = styled.div.attrs({
  className: "col s12 m6 l5 xl4"
})`
  && {
    padding: 60px 30px 25px 60px;

    @media (max-width: 600px) {
      padding: 60px 70px 30px;
    }
    @media (min-width: 1200px) {
      padding: 60px 50px 30px 0;
    }
  }
`;

export const Card = styled.div.attrs({ className: "card grey" })``;

export const CardImage = styled.div.attrs({ className: "card-image" })`
  margin: auto;
  padding: 25px 0;
  width: 70%;
`;

export const RightSideCont = styled.div.attrs({
  className: "col s12 m6 l7 xl8"
})`
  background: white;
`;

export const CardContent = styled.div.attrs({ className: "card-content" })`
  padding: 25px;
`;
export const P = styled.p.attrs({ className: "collection-item" })`
  && {
    background-color: transparent;
    font-weight: bold;
    color: white;

    &:not(.active):hover {
      background: #008080;
      cursor: pointer;
    }
  }
`;
export const H5 = styled.h5.attrs({ className: "white-text" })``;
