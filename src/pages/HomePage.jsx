import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <ul>
        <li>
          <Link to="/categories">categories</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
