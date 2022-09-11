import styled from "styled-components";

export const StyledButton = styled.button`
  background: linear-gradient(to left, #e85636 50%, #fd6234 50%) right;
  font-family: "Abel", sans-serif;
  background-size: 200% 100%;
  border: none;
  color: white;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;

  transition: 1s;
  &:hover {
    background-position: left;
    padding: 10px 330px;

    cursor: pointer;
  }
  @media (max-width: 768px) {
    &:hover {
      padding: 10px 150px;
    }
  }
`;

export const NormalButton = styled(StyledButton)`
  border-radius: 0;
  padding: 15px 40px;
`;
