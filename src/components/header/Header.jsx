import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss"

import ContentWrapper from "../contentWrapper/ContentWrapper";
import hotStarLogo from "../../assets/logo.png";
const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


  const controlNavbar = () => {
    console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setLastScrollY(window.scrollY);
    }else {
      setShow("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);



  const searchQueryHandler = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  }

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else if(type==="tv") {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  }

  return (
    <>
      <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <ContentWrapper>
          <div className="logo">
            <img src={hotStarLogo} alt="" />
          </div>
          <ul className="menuItems">
            <li
              className="menuItem hover:scale-110 transition-all duration-300
            ease-in-out"
            onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="menuItem hover:scale-110 transition-all duration-300
            ease-in-out "
            onClick={() => navigationHandler("movie")}
            >
              Movies
            </li>

            <li
              className="menuItem hover:scale-110 transition-all duration-300
            ease-in-out"
            onClick={() => navigationHandler("tv")}
            >
              TV Shows
            </li>
            <li
              className="menuItem hover:scale-110 transition-all duration-300
            ease-in-out"
            >
              <HiOutlineSearch onClick={openSearch} />
            </li>
          </ul>
          <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
        </ContentWrapper>
        {showSearch &&
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>}
      </header>
    </>
  );
};

export default Header;


