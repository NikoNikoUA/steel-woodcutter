import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout.jsx";

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
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="easter" element={<Easter />} />
          <Route path="christmas" element={<Christmas />} />
          <Route path="valentine" element={<Valentine />} />
          <Route path="miscellaneous" element={<Miscellaneous />} />
          <Route path="book" element={<Book />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
