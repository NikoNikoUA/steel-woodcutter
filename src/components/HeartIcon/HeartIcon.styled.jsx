import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { styled as muiStyled } from "@mui/material/styles";
import styled from "styled-components";
import Modal from "react-modal";

export const HeartFill = muiStyled(Favorite)({
  fill: "#3030df",
});

export const HeartStroke = muiStyled(FavoriteBorder)({
  fill: "#3030df",
});

Modal.setAppElement("#root");

export const PushModal = styled(Modal)`
  position: relative;
  border-radius: 12px;
  max-width: 600px;
  height: 400px;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 64px;
  border: 1px solid black;
`;

export const PushContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const PushText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 20px;
  top: 20px;

  & > svg {
    stroke: ${(props) => props.theme.colors.darkColor};
    transition: all 250ms ease;
  }

  transition: all 250ms ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);

    & > svg {
      stroke: white;
    }
  }
`;
