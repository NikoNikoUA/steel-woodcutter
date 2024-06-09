import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";

export const Valentine = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Valentine</div>
    </>
  );
};

export default Valentine;
