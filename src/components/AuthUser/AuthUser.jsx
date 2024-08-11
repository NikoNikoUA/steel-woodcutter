import { useState } from "react";
import { BasicModal } from "../Modal/Modal";
import { RegistrationForm } from "../../components/Form/RegistrationForm.jsx";
import { LoginForm } from "../../components/Form/LoginForm.jsx";

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
    <>
      <ul>
        <li>
          <button onClick={openLoginModal} type="button">
            Вхід
          </button>
        </li>
        <li>
          <button onClick={openRegistrationModal} type="button">
            Реєстрація
          </button>
        </li>
      </ul>

      <BasicModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal}>
        <LoginForm closeModal={closeLoginModal} />
      </BasicModal>

      <BasicModal isOpen={isRegModalOpen} onRequestClose={closeRegModal}>
        <RegistrationForm closeModal={closeRegModal} />
      </BasicModal>
    </>
  );
};
