import { useRef } from "react";
import { CgMenu, CgClose } from "react-icons/cg";
import "./Styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const menuItems = document.querySelectorAll("nav > a");

  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  function smoothScrollTo(endX, endY, duration = 600) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }

  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
  }

  return (
    <header>
      <nav ref={navRef}>
        <a href="#about" className="font-custom hover:bg-white hover:text-violet-900 hover: p-2 hover:rounded-lg">
          Sobre mim
        </a>
        <a href="#skills" className="font-custom hover:bg-white hover:text-violet-900 hover: p-2 hover:rounded-lg">
          Skills
        </a>
        <a href="#projects" className="font-custom hover:bg-white hover:text-violet-900 hover: p-2 hover:rounded-lg">
          Projetos
        </a>
        <a href="#contact" className="font-custom hover:bg-white hover:text-violet-900 hover: p-2 hover:rounded-lg">
          Contato
        </a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <CgClose />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <CgMenu />
      </button>
    </header>
  );
}

export default Navbar;
