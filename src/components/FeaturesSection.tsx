import {
  PiLockThin,
  PiTruckThin,
  PiPhoneOutgoing,
  PiArrowCounterClockwiseThin,
} from "react-icons/pi";

const FeaturesSection = () => {
  return (
    <div className="py-8 px-4 bg-[#F8F9FB] mt-12 md:mt-28 border-b">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <PiArrowCounterClockwiseThin className="text-3xl mb-2" />
          <p className="text-sm">Retours gratuits</p>
        </div>
        <div className="flex flex-col items-center">
          <PiLockThin className="text-3xl mb-2" />
          <p className="text-sm">Paiement sécurisé</p>
        </div>
        <div className="flex flex-col items-center">
          <PiTruckThin className="text-3xl mb-2" />
          <p className="text-sm">Livraison offerte dès 99 € </p>
        </div>
        <div className="flex flex-col items-center">
          <PiPhoneOutgoing className="text-3xl mb-2" />
          <p className="text-sm">Service client</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
