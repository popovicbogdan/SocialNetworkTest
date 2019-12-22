import styled from "styled-components";

export const Card = styled.div.attrs({
  className: "card horizontal valign-wrapper hoverable"
})`
  @media (max-width: 600px) {
    margin: 10px 20px;
  }
`;
export const CardImage = styled.div.attrs({ className: "card-image" })`
  width: 15%;
  padding: 5px;
`;
export const CardContent = styled.div.attrs({ className: "card-content" })`
  padding: 5px;
`;
