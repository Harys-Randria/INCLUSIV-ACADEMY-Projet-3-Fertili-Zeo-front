import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const SearchButton = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="header-search-box">
        <a
          href="#"
          className="main-menu__search search-toggler icon-magnifying-glass"
          variant="primary"
          onClick={handleShow}
        ></a>
      </div>
      <div className="search-popup">
        <Modal
          show={show}
          onHide={handleClose}
          className="search-popup__overlay search-toggler"
        >
          <div className="search-popup__content">
            <form action="#">
              <label for="search" className="sr-only">
                rechercher
              </label>
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="thm-btn"
              >
                <i className="icon-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SearchButton;
