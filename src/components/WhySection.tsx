import { MdTrackChanges } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { IconType } from "react-icons";
import { BsAlarmFill, BsFillClipboard2DataFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
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
    Icon: MdTrackChanges
  },
  {
    benefit: "REAL-TIME PRICING",
    description:
      "Stay up-to-date with instant prices on major cryptocurrencies.",
    Icon: GiPayMoney
  },
  // {
  //   benefit: "CUSTOMIZABLE ALERTS",
  //   description: "Receive alerts tailored to your investment preferences.",
  //   Icon: BsAlarmFill
  // },
  // {
  //   benefit: "USER-FRIENDLY INTERFACE",
  //   description:
  //     "Manage your portfolio with ease using our intuitive platform.",
  //   Icon: FaUsers
  // },
  // {
  //   benefit: "ACCURATE DATA",
  //   description:
  //     "We provide reliable and timely data from reputable exchanges.",
  //   Icon: BsFillClipboard2DataFill
  // },
  {
    benefit: "SECURE AND PRIVATE",
    description:
      "Your data is safeguarded with top-notch encryption and security.",
    Icon: RiChatPrivateFill
  }
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
          {whyUsData.map((data) => (
            <BenefitCard {...data} />
          ))}
        </div>

        <img
          alt="Security threats falling on person protected by an umbrella"
          src="https://bin.bnbstatic.com/image/julia/new-hompage/trusted-section.webp"
        />
      </div>
    </div>
  );
};

export default WhySection;
