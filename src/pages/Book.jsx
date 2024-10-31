import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackLink } from "../components/BackLink/BackLink";
import { fetchBookProducts } from "../utils/api";
import { BasicModal } from "../components/Modal/Modal";
import { BasicCardModal, Container, Section } from "../../CommonStyles.styled";
import { CategoriesList } from "../components/CategoriesList/CategoriesList";

export const Book = () => {
  const [bookProducts, setBookProducts] = useState([]);
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
      <CategoriesList />
      <Section>
        <Container>
          <BackLink to={backLinkHref.current} />
          <div>Book</div>
          <ul>
            {bookProducts.map((bookProduct) => (
              <li key={bookProduct._id}>
                <div>{bookProduct.name}</div>
                <div>Ціна: {bookProduct.price} UAH</div>
                <button type="button" onClick={() => openModal(bookProduct)}>
                  Learn more
                </button>
              </li>
            ))}
          </ul>
          {selectedProduct && (
            <BasicCardModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <div>{selectedProduct.name}</div>
              <div>{selectedProduct.description}</div>
            </BasicCardModal>
          )}
        </Container>
      </Section>
    </>
  );
};

export default Book;
