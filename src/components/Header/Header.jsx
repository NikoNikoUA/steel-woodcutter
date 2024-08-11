import { Link } from "react-router-dom";
import { AuthUser } from "../AuthUser/AuthUser";
import { UserInfo } from "../UserInfo/UserInfo";
import { currentUser } from "../../utils/api";

export const Header = () => {
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
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <AuthUser />
        <UserInfo />
      </header>
    </section>
  );
};
