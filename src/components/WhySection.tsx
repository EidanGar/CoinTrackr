import { MdTrackChanges } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { IconType } from "react-icons";
import { RiChatPrivateFill } from "react-icons/ri";

type BenefitData = {
  benefit: string;
  description: string;
  Icon: IconType;
};

const whyUsData: BenefitData[] = [
  {
    benefit: "TRACK MULTIPLE CRYPTOCURRENCIES",
    description: "Monitor all your crypto investments at a glance.",
    Icon: MdTrackChanges,
  },
  {
    benefit: "REAL-TIME PRICING",
    description:
      "Stay up-to-date with instant prices on major cryptocurrencies.",
    Icon: GiPayMoney,
  },
  {
    benefit: "SECURE AND PRIVATE",
    description:
      "Your data is safeguarded with top-notch encryption and security.",
    Icon: RiChatPrivateFill,
  },
];

const WhySection = () => {
  const BenefitCard = ({ benefit, description, Icon }: BenefitData) => (
    <div className="why__card">
      <div className="why__card__icon-container">
        <Icon className="why__card__icon" />
      </div>
      <div className="why__card__content">
        <span className="card__content__benefit">{benefit}</span>
        <span className="card__content__description">{description}</span>
      </div>
    </div>
  );

  return (
    <div id="choose" className="app__why">
      <div className="why__top">
        <h2 className="why__title">Your trusted crypto tracker</h2>
        <span>
          Here at Cointrackr, we are committed to user protection with strict
          protocols and industry-leading technical measures.
        </span>
      </div>
      <div className="why__content">
        <div className="why__cards">
          {whyUsData.map((data, idx) => (
            <BenefitCard key={idx} {...data} />
          ))}
        </div>

        <img
          alt="Man covered by a womans umbrella under the rain with coins in between them while the market stock crashes."
          src="https://i.postimg.cc/D0QSKsW-n/Coin-Trackr-Why-Hero.png"
        />
      </div>
    </div>
  );
};

export default WhySection;
