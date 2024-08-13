import { Link } from "react-router-dom";
import { AuthUser } from "../Auth/AuthUser/AuthUser";
import { UserInfo } from "../Auth/UserInfo/UserInfo";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/selectors";
import { useEffect, useState } from "react";

export const Header = () => {
  const authUser = useSelector(selectUser);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(authUser);
  }, [authUser]);

  return (
    <section>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            {user && (
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            )}
          </ul>
        </nav>
        {user ? <UserInfo /> : <AuthUser />}
      </header>
    </section>
  );
};
