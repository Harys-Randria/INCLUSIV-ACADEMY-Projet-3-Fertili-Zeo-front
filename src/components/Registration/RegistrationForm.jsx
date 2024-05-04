import React from "react";
import "./RegistrationForm.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SignupGoogle from "../googleauth/signup";
import FooterOne from "../../common/footer/FooterOne";
import HeaderTwo from "../../common/header/HeaderTwo";

const RegistrationForm = () => {
  // Fonction pour gérer le clic sur le bouton de fermeture de la page

  return (
    <>
      <HeaderTwo />
      <div className="registration-form">
        <form>
          <div className="form-group">
            <h2>Inscription</h2>
          </div>
          <div className="form-group">
            <label htmlFor="name">Nom:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmation mot de passe:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
          </div>
          <button type="submit">S'inscrire</button>
          <div className="form-group">
            <p>ou</p>
          </div>
          <GoogleOAuthProvider clientId="Votre_ID_Client_Google">
            <div className="container-fluid">
              <SignupGoogle />
            </div>
          </GoogleOAuthProvider>
        </form>
      </div>
      <FooterOne />
    </>
  );
};

export default RegistrationForm;
