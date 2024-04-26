import React, { useState } from "react";
import axios from "axios";
import LogoOne from "../common/header/LogoOne";
import "../css/LoginForm.css";
import SignupGoogle from "./googleauth/signup";
import { GoogleOAuthProvider } from "@react-oauth/google";

function RegistrationForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    nif: "",
    cin: "",
    compte_type: "", // Nouvel attribut ajouté pour le choix de type de compte
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "password" || e.target.name === "confirmPassword") {
      setPasswordMatch(formData.password === e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
      return;
    }

    try {
      await axios
        .post("http://localhost:8080/compte/add/users", {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          type: 1,
          isEnable: false,
        })
        .then((res) => {
          console.log("ok");
        })
        .catch((error) => {
          console.log("tsy tafa ");
        });
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    sessionStorage.setItem("formData", JSON.stringify(formData));

    console.log(formData);

    onClose();
  };

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div
        className="modal-dialog position-absolute start-50 translate-middle custom-modal"
        role="document"
        style={{
          top: "25%",
          left: "50%",
          transform: "translate(0%, 0%)",
        }}
      >
        <div className="modal-content">
          <div className="d-flex justify-content-end align-items-end">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit} id="Formulaire">
              <div className="form-group" style={{ fontFamily: "kitchen" }}>
                <label htmlFor="compte-type">Type d'utilisateur:</label>
                <select
                  id="compte-type"
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
                <GoogleOAuthProvider clientId="813308362434-06gj12366fs5uphq25ui5cu3jor9ot5h.apps.googleusercontent.com">
                  <div className="container-fluid">
                    <SignupGoogle />
                  </div>
                </GoogleOAuthProvider>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
