import { Link } from "react-router-dom";

export const BackLink = ({ to, children }) => {
  return (
    <>
      <Link to={to}>
        <button>Go back</button>
        {children}
      </Link>
    </>
  );
};
