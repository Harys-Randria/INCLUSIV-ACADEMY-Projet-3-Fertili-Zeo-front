import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import RegistrationFull from "./RegirtrrationFull";
import "./stylecssbouttonseconnecter.css";

function ModalInscriptionAuthentification() {
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOpenModal = (option) => {
    setSelectedOption(option);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <DropdownButton
        id="inscription-dropdown"
        title="Se Connecter"
        variant="#28732E"
        style={{
          marginRight: "25px",
          marginLeft: "25px",
          fontFamily: "Fredoka One",
        }}
        className="btn-login"
      >
        <Dropdown.Item
          as="button"
          onClick={() => handleOpenModal("inscription")}
         style={{ fontFamily: "Poppins" }}>
          S'Inscrire
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => handleOpenModal("authentification")}
          style={{ fontFamily: "Poppins" }}>
          S'Authentifier
        </Dropdown.Item>
      </DropdownButton>

      {showModal && (
        <>
          {selectedOption === "inscription" && (
            <RegistrationFull onClose={handleCloseModal} />
          )}
          {selectedOption === "authentification" && (
            <Login onClose={handleCloseModal} />
          )}
        </>
      )}
    </>
  );
}

export default ModalInscriptionAuthentification;
