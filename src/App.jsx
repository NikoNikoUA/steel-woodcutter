import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

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
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/easter" element={<Easter />} />
        <Route path="/categories/christmas" element={<Christmas />} />
        <Route path="/categories/valentine" element={<Valentine />} />
        <Route path="/categories/miscellaneous" element={<Miscellaneous />} />
        <Route path="/categories/book" element={<Book />} /> */}

        {/* OR nested: we see both categories page and a child page. in such case categories page may simply show the names of categories and a caroussel, which is hidden when category is displayed*/}

        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="easter" element={<Easter />} />
          <Route path="christmas" element={<Christmas />} />
          <Route path="valentine" element={<Valentine />} />
          <Route path="miscellaneous" element={<Miscellaneous />} />
          <Route path="book" element={<Book />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
