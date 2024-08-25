import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
import { Wrapper } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
};
