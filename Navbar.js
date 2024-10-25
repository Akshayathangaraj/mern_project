import React, { useEffect, useRef, useState } from 'react';
// import './App.css'; // Make sure to import your CSS styles here

const Navbar = () => {
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const headerRef = useRef(null);
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);
  const [backTopActive, setBackTopActive] = useState(false);
  const [lastScrolledPos, setLastScrolledPos] = useState(0);

  const toggleNavbar = () => {
    setNavbarActive(prev => !prev);
    overlayRef.current.classList.toggle("active");
  };

  const closeNavbar = () => {
    setNavbarActive(false);
    overlayRef.current.classList.remove("active");
  };

  const headerActiveState = () => {
    if (window.scrollY > 150) {
      setHeaderActive(true);
      setBackTopActive(true);
    } else {
      setHeaderActive(false);
      setBackTopActive(false);
    }
  };

  const headerSticky = () => {
    if (lastScrolledPos >= window.scrollY) {
      headerRef.current.classList.remove("header-hide");
    } else {
      headerRef.current.classList.add("header-hide");
    }
    setLastScrolledPos(window.scrollY);
  };

  const scrollReveal = () => {
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach(section => {
      if (section.getBoundingClientRect().top < window.innerHeight / 2) {
        section.classList.add("active");
      } else {
        section.classList.remove("active"); // Remove 'active' class if not in view
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      headerActiveState();
      headerSticky();
      scrollReveal();
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrolledPos]); // Dependency array should include all relevant dependencies

  return (
    <header ref={headerRef} data-header className={headerActive ? 'active' : ''}>
      {/* <div className="navbar" ref={navbarRef} data-navbar className={navbarActive ? 'active' : ''}>
        <button data-nav-toggler onClick={toggleNavbar}>Toggle Menu</button>
        Your navbar links here 
        <nav>
          <a data-nav-link onClick={closeNavbar}>Home</a>
          <a data-nav-link onClick={closeNavbar}>About</a>
          <a data-nav-link onClick={closeNavbar}>Services</a>
          <a data-nav-link onClick={closeNavbar}>Contact</a>
        </nav>
      </div>
      <div ref={overlayRef} data-overlay className={navbarActive ? 'active' : ''} onClick={closeNavbar}></div>
      {backTopActive && <button data-back-top-btn className="back-top">Back to Top</button>} */}
    </header>
  );
};

export default Navbar;
