import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Login from "./Login";
import RegistrationFull from "./RegirtrrationFull";

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
      <div className="Btn-inscription text-white">
        <DropdownButton
          id="inscription-dropdown"
          title="Se Connecter"
          variant="#28732E"
        >
          <Dropdown.Item
            as="button"
            hover="#28732E"
            onClick={() => handleOpenModal("inscription")}
          >
            S'Inscrire
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            hover="#28732E"
            onClick={() => handleOpenModal("authentification")}
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
      </div>
    </>
  );
}

export default ModalInscriptionAuthentification;
