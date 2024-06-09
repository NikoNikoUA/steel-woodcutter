import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";

export const Miscellaneous = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Miscellaneous</div>
    </>
  );
};

export default Miscellaneous;
