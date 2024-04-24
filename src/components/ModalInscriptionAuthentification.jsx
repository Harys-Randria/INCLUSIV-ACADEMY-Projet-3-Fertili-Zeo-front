import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import RegistrationForm from "./RegistrationForm";
import Login from "./Login";

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
    <div className="container my-5 Btn-inscription">
      <DropdownButton
        id="inscription-dropdown"
        title="Se Connecter"
        variant="primary"
      >
        <Dropdown.Item
          as="button"
          onClick={() => handleOpenModal("inscription")}
        >
          S'Inscrire
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => handleOpenModal("authentification")}
        >
          S'Authentifier
        </Dropdown.Item>
      </DropdownButton>

      {showModal && (
        <>
          {selectedOption === "inscription" && (
            <RegistrationForm onClose={handleCloseModal} />
          )}
          {selectedOption === "authentification" && (
            <Login onClose={handleCloseModal} />
          )}
        </>
      )}
    </div>
  );
}

export default ModalInscriptionAuthentification;
