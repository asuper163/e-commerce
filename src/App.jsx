import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ProductDetailsPage from "./Pages/ProductDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
