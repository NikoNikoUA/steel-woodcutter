import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchChristmasProducts } from "../utils/api";

export const Christmas = () => {
  const [christmasProducts, setChristmasProducts] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchChristmasProducts();
        setChristmasProducts(data);
      } catch (error) {
        console.error("Error fetching Christmas products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Christmas</div>
      <ul>
        {christmasProducts.map((christmasProduct) => (
          <li key={christmasProduct._id}>
            {christmasProduct.name}
            <img
              alt="angel"
              src={`/${christmasProduct.url}`}
              width="60"
              height="60"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Christmas;
