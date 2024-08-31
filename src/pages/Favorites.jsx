import { useEffect, useState } from "react";
import { Container, ListStyling, Section } from "../../CommonStyles.styled";
import { fetchAllFavorites } from "../utils/api";
import { Card } from "../components/Card/Card";
import { BasicModal } from "../components/Modal/Modal";
import { CardDetails } from "../components/CardDetails/CardDetails";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
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
    const fetchFavorites = async () => {
      try {
        const data = await fetchAllFavorites();
        setFavorites(data);
      } catch (error) {
        console.log("Errror fetching favorites:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleRemoveFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite._id !== id)
    );
  };

  return (
    <Section>
      <Container aria-hidden="false">
        {favorites && favorites.length > 0 ? (
          <ListStyling>
            {favorites.map((favorite) => (
              <li key={favorite._id}>
                <Card
                  product={favorite}
                  openModal={() => openModal(favorite)}
                  onFavRemove={handleRemoveFavorite}
                />
              </li>
            ))}
          </ListStyling>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: "30px",
            }}
          >
            <p
              style={{
                fontSize: "30px",
              }}
            >
              Список порожній. Перейдіть в&nbsp;
              <Link
                style={{ textDecoration: "underline", fontWeight: "bold" }}
                to="/categories"
              >
                Категорії
              </Link>{" "}
              щоб додати до улюблених
            </p>
          </div>
        )}
        {selectedProduct && (
          <BasicModal isOpen={isModalOpen} onRequestClose={closeModal}>
            <CardDetails product={selectedProduct} />
          </BasicModal>
        )}
      </Container>
    </Section>
  );
};

export default Favorites;
