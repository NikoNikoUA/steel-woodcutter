import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { CardDetails } from "../CardDetails/CardDetails";
import { BasicModal } from "../Modal/Modal";
import { fetchEasterProducts } from "../../utils/api";
import { EasterList } from "./EasterComponent.styled";

export const EasterComponent = () => {
  const [easterProducts, setEasterProduct] = useState([]);
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
      <EasterList>
        {easterProducts.map((easterProduct) => (
          <li key={easterProduct._id}>
            <Card
              product={easterProduct}
              openModal={() => openModal(easterProduct)}
            />
          </li>
        ))}
      </EasterList>
      {selectedProduct && (
        <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <CardDetails product={selectedProduct} />
        </BasicModal>
      )}
    </>
  );
};
