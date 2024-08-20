import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../utils/api";
import { removeToken } from "../../../../redux/auth/authSlice";
import { userName } from "../../../../redux/selectors";
import { removeName } from "../../../../redux/user/userSlice";
import { HelloText, UserContainer, LogOutButton } from "./UserInfo.styled";

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
    <UserContainer>
      <HelloText>
        Привіт,{" "}
        <span style={{ fontWeight: "bold" }}>
          {username !== null ? username : "User"}
        </span>
      </HelloText>

      <LogOutButton onClick={handleLogout} type="button">
        Вихід
      </LogOutButton>
    </UserContainer>
  );
};
