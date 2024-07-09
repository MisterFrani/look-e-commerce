import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/Context";

import Header from "./components/Header";
import Products from "./components/Products";
import ArticleDetailPage from "./components/ArticleDetailPage";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CookieModal from "./components/CookieModal";

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <div className="relative">
            <CookieModal />
            <Header />

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/article/:id" element={<ArticleDetailPage />} />
            </Routes>

            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
