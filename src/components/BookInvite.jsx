import React, { useState, useEffect, useRef } from "react";
import "./book-invite.css";

const PAGES = [
  {
    top: (
      <div className="content">
        <img className="image-1" src="images/page-1-top.png" />
      </div>
    ),
    bottom: (
      <div className="content">
        <h2 className="page-1-text">
          We cordially invite you to grace the occasion of our marriage and seek
          your best wishes as we embark on this new chapter in our life.
        </h2>
      </div>
    ),
  },
  {
    top: (
      <div className="content">
        <img className="image-1" src="images/page-2-top.png" />
      </div>
    ),
    bottom: (
      <div className="content">
        <h2>Reception :</h2>
        <h2>18th October, 7PM onwards</h2>
        <hr />
        <h2>Muhurtha :</h2>
        <h2>19th October, 9-10AM</h2>
      </div>
    ),
  },
  {
    top: (
      <div className="content">
        <img className="image-1" src="images/page-3-top.png" />
      </div>
    ),
    bottom: (
      <div className="content">
        <h2>Shivabalayougi kalyana mantapa (upper hall)</h2>
        <h3>6th Main Rd, 3rd Phase, J. P. Nagar, Bengaluru</h3>
        <a href="https://maps.app.goo.gl/qhL2AyNoRoVK9fEZA">
          <img className="map-logo" src="images/g-map.png" />
        </a>
      </div>
    ),
  },
];

const BookInvite = () => {
  const [showUpAnimation, setShowUpAnimation] = useState(false);
  const [showDownAnimation, setShowDownAnimation] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const timerRef = useRef(null);
  const [autoIsOn, setAutoIsOn] = useState(true);

  const handleTopPageClick = (e, isAuto) => {
    if (currentPage === 0) return;

    if (!isAuto) {
      setAutoIsOn(false);
      clearTimeout(timerRef.current);
    }

    const pages = document.querySelectorAll(".content");

    pages.forEach((page) => {
      setTimeout(() => {
        page.classList.remove("content-show-animation");
      }, 5);
    });

    setCurrentPage(currentPage - 1);
    setShowUpAnimation(true);

    setTimeout(() => {
      setShowUpAnimation(false);
    }, 1000);
  };

  const handleBottomPageClick = (e, isAuto) => {
    if (currentPage === PAGES.length - 1) return;

    if (!isAuto) {
      clearTimeout(timerRef.current);
      setAutoIsOn(false);
    }

    const pages = document.querySelectorAll(".content");

    pages.forEach((page) => {
      setTimeout(() => {
        page.classList.remove("content-show-animation");
      }, 5);
    });

    setCurrentPage(currentPage + 1);
    setShowDownAnimation(true);

    setTimeout(() => {
      setShowDownAnimation(false);
    }, 1000);
  };

  useEffect(() => {
    if (autoIsOn) {
      timerRef.current = setTimeout(() => {
        autoIsOn && handleBottomPageClick({}, true);
      }, 4000);
    }

    if (currentPage === PAGES.length - 1 && autoIsOn) {
      setAutoIsOn(false);
      clearTimeout(timerRef.current);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [currentPage, autoIsOn]);

  useEffect(() => {
    // Add the animation class to the current page when it's mounted
    const pages = document.querySelectorAll(".content");
    pages.forEach((page) => {
      setTimeout(() => {
        page.classList.add("content-show-animation");
      }, 20);
    });
  }, [currentPage]);

  return (
    <div className="invite-wrapper">
      {showUpAnimation && <div className="psuedoBookDown" />}
      {showDownAnimation && <div className="psuedoBook" />}
      <div className="book">
        <div className="page page-up" onClick={handleTopPageClick}>
          {PAGES[currentPage].top}
        </div>
        <div className="page page-down" onClick={handleBottomPageClick}>
          {PAGES[currentPage].bottom}
        </div>
      </div>
    </div>
  );
};

export default BookInvite;
