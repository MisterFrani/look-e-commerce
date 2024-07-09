import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import PriceDisplay from "./PriceDisplay";

interface Article {
  id: number;
  name: string;
  image: string;
  hoverImage: string;
  price: number;
  originalPrice?: number | null; // Adapter la définition si nécessaire
  discountPercentage?: number | null;
  inStock: boolean;
  isNew: boolean;
}

interface CardProps {
  article: Article;
}

const Card: React.FC<CardProps> = ({ article }) => {
  const [isHovered, setIsHovered] = useState(false);

  const imageStyle = {
    opacity: article.inStock ? 1 : 0.5,
  };

  const CardContent = (
    <div
      key={article.id}
      className="relative rounded overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {article.isNew && (
        <div className="absolute text-[0.78rem] flex items-center gap-2 top-0 left-0 bg-white text-black m-3 py-2 px-2 rounded-br-lg z-10">
          <HiOutlineShoppingBag />
          <span className="hidden md:inline">Nouveau</span>
        </div>
      )}
      {!article.inStock && (
        <div className="absolute text-[0.78rem] flex items-center gap-2 top-0 right-0 bg-white text-red-500 m-3 py-2 px-2 rounded-bl-lg z-10">
          <HiOutlineArchiveBoxXMark />
          <span className="hidden md:inline">Épuisé</span>
        </div>
      )}
      <img
        className="w-full"
        src={isHovered ? article.hoverImage : article.image}
        alt={article.name}
        style={imageStyle}
      />
      <div className="px-3 pt-4 text-center">
        <div className="text-sm mb-2 font-semibold">{article.name}</div>
      </div>
      <div className="pb-2 text-center">
        <PriceDisplay
          originalPrice={article.originalPrice ?? null}
          discountPercentage={article.discountPercentage ?? null}
          price={article.price}
        />
      </div>
    </div>
  );

  return article.inStock ? (
    <Link to={`/article/${article.id}`}>{CardContent}</Link>
  ) : (
    <>{CardContent}</>
  );
};

export default Card;
