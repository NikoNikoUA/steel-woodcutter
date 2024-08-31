import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { Container, ListStyling, Section } from "../../CommonStyles.styled";
import { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { CardDetails } from "../components/CardDetails/CardDetails";
import { BasicModal } from "../components/Modal/Modal";
import { fetchEasterProducts } from "../utils/api";
import { CategoriesList } from "../components/CategoriesList/CategoriesList";

export const Easter = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? "/categories");

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
      <CategoriesList />
      <Section>
        <Container>
          <BackLink to={backLinkHref.current} />
          <ListStyling>
            {easterProducts.map((easterProduct) => (
              <li key={easterProduct._id}>
                <Card
                  product={easterProduct}
                  openModal={() => openModal(easterProduct)}
                />
              </li>
            ))}
          </ListStyling>
          {selectedProduct && (
            <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <CardDetails product={selectedProduct} />
            </BasicModal>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Easter;
