import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchMiscellaneousProducts } from "../utils/api";

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
        {miscellaneousProducts.map((setMiscellaneousProduct) => (
          <li key={setMiscellaneousProduct._id}>
            {setMiscellaneousProduct.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Miscellaneous;
