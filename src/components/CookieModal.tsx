import React, { useState, useEffect } from "react";

const CookieModal: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState<boolean | undefined>(
    localStorage.getItem("acceptedCookies")
      ? JSON.parse(localStorage.getItem("acceptedCookies") as string)
      : undefined
  );

  useEffect(() => {
    const useCookie = acceptedCookies !== undefined;

    if (useCookie) {
      closeCookieModal();
    } else {
      openCookieModal();
    }
  });

  const handleAcceptCookies = (): void => {
    setAcceptedCookies(true);
    localStorage.setItem("acceptedCookies", "true");
    closeCookieModal();
  };

  const handleContinueWithoutCookies = (): void => {
    setAcceptedCookies(false);
    localStorage.setItem("acceptedCookies", "false");
    closeCookieModal();
  };

  function closeCookieModal(): void {
    document.body.classList.remove("modal-open");
  }

  function openCookieModal(): void {
    document.body.classList.add("modal-open");
  }

  if (acceptedCookies !== undefined) {
    return null;
  }

  return (
    <div className="fixed z-[10000] inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center px-2">
      <div className="bg-white rounded-sm p-8 max-w-[480px] w-full">
        <h2 className="text-sm font-semibold mb-4">Bienvenue chez Look !</h2>
        <p className="mb-4 text-sm">
          Avant de continuer, nous souhaitons obtenir votre accord pour
          l'utilisation des cookies, utilisés par nous et nos partenaires à des
          fins telles que la mesure d'audience, la publicité personnalisée, et
          la personnalisation des contenus en fonction de vos centres
          d’intérêts.
          <br />
          <br />
          Vous pouvez accepter tous les cookies en cliquant sur "Accepter et
          continuer". Si vous préférez ne pas accepter les cookies, vous pouvez
          sélectionner "Continuer sans accepter".
          <br />
          <br />
          Pour en savoir plus sur notre politique de cookies, veuillez consulter
          notre Liste des cookies et notre Charte Données Personnelles.
        </p>
        <div className="flex justify-between">
          <button
            onClick={handleContinueWithoutCookies}
            className="text-black hover:underline text-sm underline"
          >
            Continuer sans accepter →
          </button>
          <button
            onClick={handleAcceptCookies}
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black border border-black transition-colors duration-300 text-sm"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
