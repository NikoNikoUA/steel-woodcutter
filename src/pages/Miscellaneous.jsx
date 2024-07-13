import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchMiscellaneousProducts } from "../utils/api";
import { Card } from "../components/Card/Card";

export const Miscellaneous = () => {
  const [miscellaneousProducts, setMiscellaneousProducts] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMiscellaneousProducts();
        setMiscellaneousProducts(data);
      } catch (error) {
        console.error("Error fetching Christmas products:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Miscellaneous</div>
      <ul>
        {miscellaneousProducts.map((miscellaneousProduct) => (
          <li key={miscellaneousProduct._id}>
            <Card product={miscellaneousProduct} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Miscellaneous;
