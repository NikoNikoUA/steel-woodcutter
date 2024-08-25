import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

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
  cursor: pointer;

  @media screen and (min-width: 1440px) {
    &:hover {
      animation: ${shake} 0.5s ease-in-out;
    }
  }
`;

export const SocialLink = styled.button`
  all: unset;
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    &:hover {
      animation: ${shake} 0.5s ease-in-out;
    }
  }
`;
