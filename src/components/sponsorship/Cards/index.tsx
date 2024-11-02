import "./index.scss";
import TierCard from "./Card";

const bronzeBenefits = [
  "Shout-out on X",
  "Shout-out on LinkedIn",
  "Visibility on Our Website",
  "Access to Our Development Roadmap",
];

const silverBenefits = [
  ...bronzeBenefits,
  "Visibility on Front Page of our website",
  "Feature Prioritization",
];

const golderBenefits = [
  ...silverBenefits,
  "Everything in Bronze Sponsorship",
  "Visibility on our GitHub repository",
  "Visibility on our event promotional items",
  "Direct Support from our team",
];

const tierDetails = [
  {
    name: "Bronze",
    fee: 100,
    benefits: bronzeBenefits,
    link: 'https://flutterwave.com/pay/basable-bronze'
  },
  {
    name: "Silver",
    fee: 200,
    benefits: silverBenefits,
    link: 'https://flutterwave.com/pay/basable-silver'
  },
  {
    name: "Gold",
    fee: 300,
    benefits: golderBenefits,
    link: 'https://flutterwave.com/pay/dbrg5aydwqbn'
  },
  {
    name: "Donation",
    fee: 300,
    benefits: [],
  },
];

export type TierDetail = (typeof tierDetails)[number];

const CardList = () => {
  return (
    <section className="sponsorshipCardList">
      {tierDetails.map((tier) => (
        <TierCard tier={tier} key={tier.name} />
      ))}
    </section>
  );
};

export default CardList;
