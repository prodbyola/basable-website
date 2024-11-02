import X from "../Header/assets/X.svg";
import Github from "../Header/assets/Github.svg";
import LinkedIn from "../Header/assets/LinkedIn.svg";
export const HeaderButtons = () => {
  return (
    <div className="header-buttons">
      <button className="btn login">Join now</button>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={LinkedIn.src} alt="LinkedIn" className="icon" />
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={X.src} alt="X" className="icon" />
      </a>
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Github.src} alt="GitHub" className="icon" />
      </a>
    </div>
  );
};
