import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import "../css/LoginForm.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LogoOne from "../common/header/LogoOne";
import SignupGoogle from "./googleauth/signup";

function RegistrationFull({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    nif: "",
    cin: "",
    compte_type: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatch(formData.password === value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, compte_type } = formData;

    if (password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    try {
      await axios.post("http://localhost:8080/compte/add/users", {
        name,
        email,
        password,
        type: 1,
        isEnable: false,
      });

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        address: "",
        nif: "",
        cin: "",
        compte_type: "",
      });

      onClose();
      Swal.fire({
        icon: "success",
        title: "Confirmation réussie !",
        text: "Buenvenue Chez Fertili'zeo.",
      });
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      Swal.fire({
        icon: "success",
        title: "Inscription réussie !",
        text: "Vous êtes inscrit avec succès. Un mail de confirmation a été envoyé à votre adresse email.",
      });
    }
  };

  return (
    <Modal isOpen={true} fullscreen>
      <ModalBody className="d-flex flex-row">
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 400,
            height: 400,
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + "assets/images/resources/inscription.jpg"
            }
            alt="Inscription"
            style={{ width: "50%", height: "150%", marginTop: "400px" }}
          />
        </div>

        <div style={{ flex: 1, padding: "20px" }}>
          <ModalHeader className="d-flex justify-content-center align-items-center mb-4">
            <LogoOne />
            <h1 className="ml-5 mt-1">Inscription</h1>
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit} id="Formulaire">
              <div className="form-group">
                <label htmlFor="compte_type">Type d'utilisateur:</label>
                <select
                  id="compte_type"
                  name="compte_type"
                  className="form-control"
                  value={formData.compte_type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionnez un type d'utilisateur</option>
                  <option value="CLIENT">Client</option>
                  <option value="FOURNISSEUR">Fournisseur</option>
                  <option value="PRODUCTEUR">Producteur</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="name">Nom:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  pattern="^[a-zA-Z ]+$"
                  title="Le nom ne doit contenir que des lettres et des espaces"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Veuillez entrer une adresse email valide"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe:</label>
                <input
                  type="password"
                  className={`form-control ${
                    !passwordMatch ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  title="Le mot de passe doit contenir au moins 8 caractères"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirmer le mot de passe:
                </label>
                <input
                  type="password"
                  className={`form-control ${
                    !passwordMatch ? "is-invalid" : ""
                  }`}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  minLength={8}
                  title="Le mot de passe doit contenir au moins 8 caractères"
                />
                {!passwordMatch && (
                  <div className="invalid-feedback">
                    Les mots de passe ne correspondent pas.
                  </div>
                )}
              </div>
              <div className="text-center">
                <button id="Btn-inscription" type="submit">
                  S'inscrire
                </button>
                <p>ou</p>
                <GoogleOAuthProvider clientId="Votre_ID_Client_Google">
                  <div className="container-fluid">
                    <SignupGoogle />
                  </div>
                </GoogleOAuthProvider>
              </div>
            </form>
          </ModalBody>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default RegistrationFull;
