import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: flex-start;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
`;

export const AdditionalHeading = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  text-decoration: uppercase;
`;

export const TelButton = styled.button`
  all: unset;
`;
