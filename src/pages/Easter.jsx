import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchEasterProducts } from "../utils/api";

export const Easter = () => {
  const [easterProducts, setEasterProduct] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/categories");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEasterProducts();
        setEasterProduct(data);
      } catch (error) {
        console.error("Error fetching Christmas products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Easter</div>
      <ul>
        {easterProducts.map((easterProduct) => (
          <li key={easterProduct._id}>{easterProduct.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Easter;
