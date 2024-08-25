import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 70px;
    flex-direction: row;
  }
`;

export const Text = styled.p`
  text-decoration: uppercase;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;

  svg {
    width: 40px;
    height: 40px;
    fill: black;
    transition: fill 0.3s ease-in-out;

    &:hover {
      fill: grey;
    }
  }
`;

export const TelButton = styled.button`
  all: unset;
  cursor: pointer;
`;
