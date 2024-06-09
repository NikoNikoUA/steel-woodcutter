import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div>Categories</div>
      <ul>
        <li>
          <Link to="easter">Easter</Link>
        </li>
        <li>
          <Link to="christmas">Christmas</Link>
        </li>
        <li>
          <Link to="valentine">Valentine</Link>
        </li>
        <li>
          <Link to="miscellaneous">Miscellaneous</Link>
        </li>
        <li>
          <Link to="book">Book</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Categories;
