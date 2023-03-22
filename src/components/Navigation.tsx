import { useRef } from "react";
import { BsTwitter, BsDiscord } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const navigationTriggerRef = useRef<HTMLInputElement>(null);

  const setTriggerFalse = () => {
    if (navigationTriggerRef.current == null) return;
    navigationTriggerRef.current.checked = false;
  };

  const NavigationMenu = () => (
    <nav className="header__nav">
      <ul className="nav__list">
        <li>
          <a className="hover" href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#market">Market</a>
        </li>
        <li>
          <a href="#choose">Why Us</a>
        </li>
        <li>
          <a href="#join">Join</a>
        </li>
      </ul>
    </nav>
  );

  const NavigationContact = ({ className }: { className: string }) => (
    <div className={className}>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter className="header__contact__icon" />
      </a>
      <a
        href="https://www.discord.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsDiscord className="header__contact__icon" />
      </a>
    </div>
  );

  const MobileNavigationMenu = () => (
    <nav className="header__nav-mobile">
      <div className="menu__container">
        <input
          ref={navigationTriggerRef}
          type="checkbox"
          className="menu__trigger"
        />
        <CgMenuRightAlt className="nav__menu" />
      </div>
      <div className="nav__container">
        <button onClick={setTriggerFalse} className="nav__close">
          <AiOutlineClose className="nav__close__icon" />
        </button>
        <ul className="nav__list-mobile">
          <li onClick={setTriggerFalse}>
            <a href="#home">Home</a>
          </li>
          <li onClick={setTriggerFalse}>
            <a href="#market">Market</a>
          </li>
          <li onClick={setTriggerFalse}>
            <a href="#choose">Why Us</a>
          </li>
          <li onClick={setTriggerFalse}>
            <a href="#join">Join</a>
          </li>
        </ul>

        <NavigationContact className="header__contact-mobile" />
      </div>
    </nav>
  );

  return (
    <header className="app__header">
      <h2 className="header__logo">CoinTrackr</h2>
      <NavigationMenu />
      <NavigationContact className="header__contact" />
      <MobileNavigationMenu />
    </header>
  );
};

export default Navigation;
