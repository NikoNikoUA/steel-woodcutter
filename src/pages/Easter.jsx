import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";

export const Easter = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/categories");

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Easter</div>
    </>
  );
};

export default Easter;
