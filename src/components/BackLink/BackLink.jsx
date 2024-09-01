import { Link } from "react-router-dom";
import { BackButton } from "./Backlink.styled";
import { HiOutlineArrowLeft } from "react-icons/hi";

export const BackLink = ({ to, children }) => {
  return (
    <>
      <Link to={to}>
        <BackButton>
          <HiOutlineArrowLeft />
          До категорій
        </BackButton>
        {children}
      </Link>
    </>
  );
};
