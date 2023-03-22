import { BsTwitter, BsDiscord, BsFacebook, BsYoutube } from "react-icons/bs";

const JoinSection = () => {
  return (
    <div id="join" className="app__join">
      <h2 className="join__title">
        JOIN US VIA
        <br />
        <span>DISCORD</span>
      </h2>
      <button className="join__button">Join us via Discord</button>
      <div className="join__icons">
        <a href="twitter.com">
          <BsTwitter className="links__icon" />
        </a>
        <a href="discord.com">
          <BsDiscord className="links__icon" />
        </a>
        <a href="facebook.com">
          <BsFacebook className="links__icon" />
        </a>
        <a href="youtube.com">
          <BsYoutube className="links__icon" />
        </a>
      </div>
      <div className="join__links">
        <a href="#home">Privacy</a>
        <a href="#home">Terms of use</a>
      </div>
    </div>
  );
};

export default JoinSection;
