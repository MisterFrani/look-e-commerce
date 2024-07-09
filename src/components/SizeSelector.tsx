import React from "react";

interface SizeSelectorProps {
  selectedSize: string | null;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  selectedSize,
  setSelectedSize,
}) => {
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="size-selector flex gap-2 border-b border-gray-200 pb-5">
      {sizes.map((size) => (
        <button
          key={size}
          className={`px-5 py-2   rounded-full border transition-colors duration-300 mt-4 text-xs   ${
            selectedSize === size
              ? "bg-[#121212] text-white"
              : "bg-white text-black border-[#121212]"
          }`}
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
