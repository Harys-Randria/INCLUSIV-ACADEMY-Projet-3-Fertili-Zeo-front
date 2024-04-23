import React, { useState } from "react";
import axios from "axios";
import LogoOne from "../common/header/LogoOne";

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
      await axios.post("/add/users", formData);
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    sessionStorage.setItem("formData", JSON.stringify(formData));

    console.log(formData);

    // // Récupérer les données de la session storage
    // const storedFormData = JSON.parse(sessionStorage.getItem("formData"));

    // // Utiliser les données récupérées
    // console.log(storedFormData);

    onClose();
  };

  return (
    <div className="modal fade show" style={{ display: "block" }}>
      <div className="modal-dialog" role="document">
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
          <div>
            <LogoOne />
          </div>
          <div className="modal-header d-flex justify-content-center align-items-center ">
            <h5 className="modal-title">Inscription</h5>
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
                  <option value="CLIENT">CLIENT</option>
                  <option value="FOURNISSEUR">FOURNISSEUR</option>
                  <option value="PRODUCTEUR">PRODUCTEUR</option>
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
              <div className="form-group">
                <label htmlFor="phone">Numéro de téléphone:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  title="Veuillez entrer un numéro de téléphone valide (10 chiffres)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Adresse:</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="nif">NIF:</label>
                <input
                  type="text"
                  className="form-control"
                  id="nif"
                  name="nif"
                  value={formData.nif}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{9}"
                  title="Veuillez entrer un numéro de NIF valide (9 chiffres)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cin">CIN:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cin"
                  name="cin"
                  value={formData.cin}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{8}"
                  title="Veuillez entrer un numéro de CIN valide (8 chiffres)"
                />
              </div>
              <div>
                <button id="Btn-inscription" type="submit">
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
