import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchValentineProducts } from "../utils/api";

export const Valentine = () => {
  const [valentineProducts, setValentineProducts] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchValentineProducts();
        setValentineProducts(data);
      } catch (error) {
        console.error("Error fetching Valentine products:", error);
      }
    };
    fetchData();
  });

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Valentine</div>
      <ul>
        {valentineProducts.map((valentineProduct) => (
          <li key={valentineProduct._id}>{valentineProduct.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Valentine;
