import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchEasterProducts } from "../utils/api";
import { Card } from "../components/Card/Card";
import { BasicModal } from "../components/Modal/Modal";

export const Easter = () => {
  const [easterProducts, setEasterProduct] = useState([]);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/categories");
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
          <li key={easterProduct._id}>
            <Card
              product={easterProduct}
              openModal={() => openModal(easterProduct)}
            />
          </li>
        ))}
      </ul>
      {selectedProduct && (
        <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <div>{selectedProduct.name}</div>
          <div>{selectedProduct.description}</div>
        </BasicModal>
      )}
    </>
  );
};

export default Easter;
