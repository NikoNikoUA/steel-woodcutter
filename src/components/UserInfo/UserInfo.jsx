import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../utils/api";
import { removeToken } from "../../../redux/auth/authSlice";
import { userName } from "../../../redux/selectors";
import { removeName } from "../../../redux/user/userSlice";

export const UserInfo = () => {
  const dispatch = useDispatch();
  const username = useSelector(userName);
  const handleLogout = async () => {
    try {
      await logout();
      dispatch(removeToken());
      dispatch(removeName());
    } catch (error) {
      return error.message;
    }
  };
  return (
    <>
      <p>Привіт, {username}</p>
      <button onClick={handleLogout} type="button">
        Вихід
      </button>
    </>
  );
};
