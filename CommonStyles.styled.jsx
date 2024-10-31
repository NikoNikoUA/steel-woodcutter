import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 128px;
    max-width: 1440px;
  }
`;

export const Section = styled.section`
  padding: 30px 0;
`;

export const ListStyling = styled.ul`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const BasicCardModal = styled(Modal)`
  overflow-y: scroll;
  position: relative;
  border-radius: 12px;
  width: 90%;
  height: 90%;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 15px;

  border: 1px solid ${(props) => props.theme.colors.darkColor};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1000px;
  }
`;

export const AuthModals = styled(Modal)`
  overflow-y: scroll;
  position: relative;
  border-radius: 12px;
  width: 280px;
  height: 400px;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 15px;

  border: 1px solid ${(props) => props.theme.colors.darkColor};

  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 400px;
  }
`;
