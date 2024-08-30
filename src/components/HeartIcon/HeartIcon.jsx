import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selectors";
import {
  HeartStroke,
  HeartFill,
  PushModal,
  PushContainer,
  PushText,
  CloseBtn,
} from "./HeartIcon.styled";
import { useEffect, useState } from "react";
import icons from "../../sprite.svg";
import {
  addToFavorites,
  removeFromFavorites,
  fetchAllFavorites,
} from "../../utils/api";

export const HeartIcon = ({ product, onFavRemove }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const authUser = useSelector(selectUser);
  const [isHeartFavorite, setIsHeartFavorite] = useState(false);
  const { _id } = product;

  useEffect(() => {
    const checkFavorites = async () => {
      if (authUser) {
        try {
          const favorites = await fetchAllFavorites();
          const isFavorite = favorites.some((favorite) => favorite._id === _id);
          setIsHeartFavorite(isFavorite);
        } catch (error) {
          console.error("Error fetching user favorites:", error);
        }
      }
    };

    checkFavorites();
  }, [authUser, _id]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const onHeartClick = async () => {
    if (authUser) {
      try {
        setIsHeartFavorite(!isHeartFavorite);
        if (isHeartFavorite) {
          await removeFromFavorites(_id);
          onFavRemove(_id);
        } else {
          await addToFavorites(product);
        }
      } catch (error) {
        console.error("Error updating favorites:", error);
      }
    } else {
      openModal();
    }
  };

  return (
    <>
      <Checkbox
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
        checked={isHeartFavorite}
        onChange={onHeartClick}
      />
      {isModalOpen && (
        <PushModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <PushContainer>
            <CloseBtn type="button" onClick={closeModal}>
              <svg width="32px" height="32px">
                <use href={`${icons}#icon-modal-cross`}></use>
              </svg>
            </CloseBtn>
            {/* <img
              width="500px"
              height="250px"
              src="/LearnLingo/notification.jpg"
              alt="notification"
            /> */}
            <PushText>Please, login to use this option</PushText>
          </PushContainer>
        </PushModal>
      )}
    </>
  );
};
