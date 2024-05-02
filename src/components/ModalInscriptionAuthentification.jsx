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
        variant="success" // Remplacez "#28732E" par la variante souhaitée (par exemple, "success", "primary", etc.)
        style={{
          marginRight: "25px",
          marginLeft: "25px",
          fontFamily: "poppins",
          fontSize: "14px",
          textDecoration: "underline",
          backgroundColor: "#239c23",
        }}
        className="btn-login"
      >
        <Dropdown.Item
          as="button"
          onClick={() => handleOpenModal("inscription")}
          style={{ fontFamily: "poppins", fontSize: "14px" }}
        >
          S'Inscrire
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => handleOpenModal("authentification")}
          style={{ fontFamily: "poppins", fontSize: "14px" }}
        >
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
