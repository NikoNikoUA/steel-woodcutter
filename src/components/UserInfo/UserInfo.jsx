import { useDispatch } from "react-redux";
import { logout } from "../../utils/api";
import { removeToken } from "../../../redux/auth/authSlice";

export const UserInfo = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await logout();
      dispatch(removeToken());
    } catch (error) {
      return error.message;
    }
  };
  return (
    <>
      <p>Привіт, </p>
      <button onClick={handleLogout} type="button">
        Вихід
      </button>
    </>
  );
};
