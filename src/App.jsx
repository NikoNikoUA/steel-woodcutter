import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout.jsx";
import { PrivateRoute } from "./components/Auth/PrivateRoute/PrivateRoute.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Categories = lazy(() => import("./pages/Categories.jsx"));
const Favorites = lazy(() => import("./pages/Favorites.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Easter = lazy(() => import("./pages/Easter.jsx"));
const Christmas = lazy(() => import("./pages/Christmas.jsx"));
const Valentine = lazy(() => import("./pages/Valentine.jsx"));
const Miscellaneous = lazy(() => import("./pages/Miscellaneous.jsx"));
const Book = lazy(() => import("./pages/Book.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/easter" element={<Easter />} />
        <Route path="/categories/christmas" element={<Christmas />} />
        <Route path="/categories/valentine" element={<Valentine />} />
        <Route path="/categories/miscellaneous" element={<Miscellaneous />} />
        <Route path="/categories/book" element={<Book />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
