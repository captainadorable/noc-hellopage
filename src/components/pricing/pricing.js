import { PricingCard } from "./pricing-card";

export const Pricing = () => {
  return (
    <div className="2xl:px-64 pt-16 lg:pt-36 flex flex-col items-center space-y-16 px-4">
      <div className="text-4xl lg:text-6xl" id="pricing">
        Fiyat Listesi
      </div>

      <div className="flex flex-col space-y-10 px-4 lg:space-y-0 lg:flex-row justify-center lg:space-x-8">
        <PricingCard CardName="Beleş" CardColor="yellow-200" CardPrice="24" />
        <PricingCard CardName="Pahalı" CardColor="yellow-100" CardPrice="31" />
        <PricingCard CardName="Ucube" CardColor="yellow-300" CardPrice="67" />
      </div>
    </div>
  );
};
