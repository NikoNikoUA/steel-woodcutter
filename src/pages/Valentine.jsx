import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchValentineProducts } from "../utils/api";
import { Card } from "../components/Card/Card";
import { BasicModal } from "../components/Modal/Modal";
import { CardDetails } from "../components/CardDetails/CardDetails";
import { Container, Section } from "../../CommonStyles.styled";

export const Valentine = () => {
  const [valentineProducts, setValentineProducts] = useState([]);
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
        const data = await fetchValentineProducts();
        setValentineProducts(data);
      } catch (error) {
        console.error("Error fetching Valentine products:", error);
      }
    };
    fetchData();
  });

  return (
    <Section>
      <Container>
        <BackLink to={backLinkHref.current} />
        <div>Valentine</div>
        <ul>
          {valentineProducts.map((valentineProduct) => (
            <li key={valentineProduct._id}>
              <Card
                product={valentineProduct}
                openModal={() => openModal(valentineProduct)}
              />
            </li>
          ))}
        </ul>
        {selectedProduct && (
          <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
            <CardDetails product={selectedProduct} />
          </BasicModal>
        )}
      </Container>
    </Section>
  );
};

export default Valentine;
