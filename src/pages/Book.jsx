import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchBookProducts } from "../utils/api";

export const Book = () => {
  const [bookProducts, setBookProducts] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBookProducts();
        setBookProducts(data);
      } catch (error) {
        console.error("Error fetching Book products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <BackLink to={backLinkHref.current} />
      <div>Book</div>
      <ul>
        {bookProducts.map((bookProduct) => (
          <li key={bookProduct._id}>{bookProduct.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Book;
