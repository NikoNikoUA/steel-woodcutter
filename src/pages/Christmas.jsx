import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchChristmasProducts } from "../utils/api";
import { Card } from "../components/Card/Card";
import { BasicModal } from "../components/Modal/Modal";
import { CardDetails } from "../components/CardDetails/CardDetails";

export const Christmas = () => {
  const [christmasProducts, setChristmasProducts] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.current ?? "/categories");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

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
            <Card
              product={christmasProducts}
              openModal={() => openModal(christmasProduct)}
            />
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <CardDetails product={selectedProduct} />
        </BasicModal>
      )}
    </>
  );
};

export default Christmas;
