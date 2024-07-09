interface PriceDisplayProps {
  originalPrice?: number | null;
  discountPercentage?: number | null;
  price: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  originalPrice,
  discountPercentage,
  price,
}) => {
  const discountedPrice =
    originalPrice && discountPercentage
      ? originalPrice - (originalPrice * discountPercentage) / 100
      : price;

  return (
    <div>
      {originalPrice && discountPercentage ? (
        <div>
          <span className="line-through text-gray-500 mr-1">
            {originalPrice.toFixed(2)} €
          </span>
          <span>{discountedPrice.toFixed(2)} €</span>
          <span className="ml-1 px-2 py-1 bg-black text-white rounded-full mt-4">
            -{discountPercentage}%
          </span>
        </div>
      ) : (
        <span>{price.toFixed(2)} €</span>
      )}
    </div>
  );
};

export default PriceDisplay;
