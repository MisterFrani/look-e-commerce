import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { articles, Article } from "../data/DataProducts";
import { CartContext } from "../context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Rating from "./Rating";
import SizeSelector from "./SizeSelector";
import AccordionItem from "./AccordionItem";
import { getRecommendedArticles } from "../utils/Utils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  FaApplePay,
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import PriceDisplay from "./PriceDisplay";

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article: Article | undefined = articles.find(
    (article) => article.id === Number(id)
  );
  const cartContext = useContext(CartContext);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!article) {
    return <div>Article non trouvé</div>;
  }

  const discountedPrice =
    article.originalPrice && article.discountPercentage
      ? article.originalPrice -
        (article.originalPrice * article.discountPercentage) / 100
      : article.price;

  const recommendedArticles = getRecommendedArticles(articles, article);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error(
        "Veuillez sélectionner une taille avant d'ajouter au panier."
      );
      return;
    }

    if (cartContext) {
      cartContext.addToCart({
        id: article.id,
        name: `${article.name} - Taille: ${selectedSize}`,
        image: article.image,
        price: discountedPrice,
        quantity: 1,
      });
    }
  };

  return (
    <motion.div
      className="flex flex-col px-2 max-w-[1380px] mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ToastContainer />
      <div className="flex flex-col md:flex-row md:pt-11  ">
        <div className="w-full md:w-1/2 swiper-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {[article.image, article.hoverImage].map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full object-cover"
                  src={img}
                  alt={article.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" pt-4 md:pt-0 pl-6">
          <h1 className="text-lg md:text-xl font-semibold pb-1">
            {article.name}
          </h1>
          <div className="flex pb-3">
            <PriceDisplay
              originalPrice={article.originalPrice}
              discountPercentage={article.discountPercentage}
              price={article.price}
            />
          </div>
          {article.rating !== undefined && <Rating rating={article.rating} />}
          <SizeSelector
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
          />
          <AccordionItem title="Description" content={article.description} />
          <AccordionItem title="Durabilité" content={article.sustainability} />
          <AccordionItem
            title="Livraison et retours"
            content={article.shippingInfo}
          />
          <AccordionItem
            title="Composition et entretien"
            content={article.composition}
          />
          <AccordionItem
            title="Paiement"
            content={
              <div className="flex space-x-4">
                <FaApplePay size={30} />
                <FaPaypal size={30} />
                <FaCcVisa size={30} />
                <FaCcMastercard size={30} />
                <FaCcAmex size={30} />
              </div>
            }
          />
          {cartContext && (
            <button
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black border border-black transition-colors duration-300 mt-6"
              onClick={handleAddToCart}
            >
              Ajouter au panier
            </button>
          )}
        </div>
      </div>
      <div className="mt-20 md:mt-56 max-w-[1380px] mx-auto">
        <h2 className="text-2xl text-center font-semibold mb-12 md:mb-24">
          COMPLÉTEZ VOTRE LOOK
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {recommendedArticles.map((recArticle) => (
            <div key={recArticle.id} className="card pb-3">
              <Link to={`/article/${recArticle.id}`}>
                <img src={recArticle.image} alt={recArticle.name} />
                <h3 className="text-center font-semibold pt-4">
                  {recArticle.name}
                </h3>
                <div className="text-center">
                  <PriceDisplay
                    originalPrice={recArticle.originalPrice}
                    discountPercentage={recArticle.discountPercentage}
                    price={recArticle.price}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleDetailPage;
