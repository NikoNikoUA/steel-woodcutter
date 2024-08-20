import { useState } from "react";
import { BasicModal } from "../../Modal/Modal.jsx";
import { RegistrationForm } from "../../../components/Form/RegistrationForm.jsx";
import { LoginForm } from "../../../components/Form/LoginForm.jsx";
import {
  AuthContainer,
  SvgLogin,
  AuthList,
  LoginButtton,
  RegButton,
} from "./AuthUser.styled.jsx";
import icons from "../../../sprite.svg";
import { Lia500Px } from "react-icons/lia";

export const AuthUser = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const openRegistrationModal = () => {
    setIsRegModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeRegModal = () => {
    setIsRegModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <AuthContainer>
      <SvgLogin width="20px" height="20px">
        <use href={`${icons}#icon-login`}></use>
      </SvgLogin>

      <AuthList>
        <li>
          <LoginButtton onClick={openLoginModal} type="button">
            Вхід
          </LoginButtton>
        </li>
        <li>
          <RegButton onClick={openRegistrationModal} type="button">
            Реєстрація
          </RegButton>
        </li>
      </AuthList>

      <BasicModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
        <LoginForm closeModal={closeLoginModal} />
      </BasicModal>

      <BasicModal isOpen={isRegModalOpen} onRequestClose={closeRegModal}>
        <RegistrationForm closeModal={closeRegModal} />
      </BasicModal>
    </AuthContainer>
  );
};
