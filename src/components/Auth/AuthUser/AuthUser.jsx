import { useState } from "react";
import { BasicModal } from "../../Modal/Modal.jsx";
import { RegistrationForm } from "../../../components/Form/RegistrationForm.jsx";
import { LoginForm } from "../../../components/Form/LoginForm.jsx";
import {
  AuthContainer,
  AuthList,
  LoginButtton,
  RegButton,
  AuthLogo,
  MobileAuthContainer,
  RegLogSvgContainer,
} from "./AuthUser.styled.jsx";
import { GiAxeInLog } from "react-icons/gi";
import { AuthModals } from "../../../../CommonStyles.styled.jsx";

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
      <MobileAuthContainer>
        <div>
          <AuthLogo>LOGO</AuthLogo>
        </div>

        <RegLogSvgContainer>
          <GiAxeInLog style={{ width: "25px", height: "25px" }} />

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
        </RegLogSvgContainer>
      </MobileAuthContainer>
      <AuthModals isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
        <LoginForm closeModal={closeLoginModal} />
      </AuthModals>
      <AuthModals isOpen={isRegModalOpen} onRequestClose={closeRegModal}>
        <RegistrationForm closeModal={closeRegModal} />
      </AuthModals>
    </AuthContainer>
  );
};
