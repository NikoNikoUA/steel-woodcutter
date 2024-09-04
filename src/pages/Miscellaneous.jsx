import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchMiscellaneousProducts } from "../utils/api";
import { Card } from "../components/Card/Card";
import { BasicModal } from "../components/Modal/Modal";
import { CardDetails } from "../components/CardDetails/CardDetails";
import { Container, ListStyling, Section } from "../../CommonStyles.styled";
import { CategoriesList } from "../components/CategoriesList/CategoriesList";

export const Miscellaneous = () => {
  const [miscellaneousProducts, setMiscellaneousProducts] = useState([]);
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
      <CategoriesList />
      <Section>
        <Container>
          <BackLink to={backLinkHref.current} />
          <div>Miscellaneous</div>
          <ListStyling>
            {miscellaneousProducts.map((miscellaneousProduct) => (
              <li key={miscellaneousProduct._id}>
                <Card
                  product={miscellaneousProduct}
                  openModal={() => openModal(miscellaneousProduct)}
                />
              </li>
            ))}
          </ListStyling>
          {selectedProduct && (
            <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <CardDetails product={selectedProduct} closeModal={closeModal} />
            </BasicModal>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Miscellaneous;
