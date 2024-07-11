import React, { useState, useEffect, useRef } from "react";
import { articles } from "../data/DataProducts";
import Card from "./Card";
import { HiOutlineSearch } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCloseAndReset = () => {
    setSearchTerm("");
    onClose();
  };

  const handleArticleClick = () => {
    setSearchTerm("");
    onClose();
  };

  const filteredArticles = articles.filter((article) =>
    article.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm">
      <div className="relative w-full max-w-[1500px] mx-auto rounded-lg p-6">
        <div className="relative mb-4 flex items-center">
          <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Rechercher des articles..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
          <button
            onClick={handleCloseAndReset}
            className="ml-4 p-2 bg-black rounded-full text-white hover:bg-[#65a2df] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-[85vh] md:max-h-[64vh] overflow-y-auto">
          {searchTerm &&
            filteredArticles.map((article) => (
              <div key={article.id} onClick={handleArticleClick}>
                <Card article={article} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
