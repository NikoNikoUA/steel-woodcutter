import { useEffect, useState } from "react";
import { Container, Section } from "../../CommonStyles.styled";
import { fetchAllFavorites } from "../utils/api";
import { Card } from "../components/Card/Card";
import { BasicModal } from "../components/Modal/Modal";
import { CardDetails } from "../components/CardDetails/CardDetails";

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
      <Container>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite._id}>
              <Card
                product={favorite}
                openModal={() => openModal(favorite)}
                onFavRemove={handleRemoveFavorite}
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

export default Favorites;
