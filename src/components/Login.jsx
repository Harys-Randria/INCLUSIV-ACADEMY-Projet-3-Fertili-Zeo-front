import React, { useState } from "react";
import axios from "axios";
import "../css/LoginForm.css";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPasswordRequested, setResetPasswordRequested] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:8080/compte/signin", {
        email,
        password,
      });
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("name", response.data.name);
      sessionStorage.setItem("email", response.data.email);
      sessionStorage.setItem("type", response.data.type);
      sessionStorage.setItem("id", response.data.id);
      sessionStorage.setItem("cin", response.data.cin);
      sessionStorage.setItem("phone", response.data.phone);
      sessionStorage.setItem("address", response.data.address);
      sessionStorage.setItem("nif_stat", response.data.nif_stat);

      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  const handleResetPassword = () => {
    setResetPasswordRequested(true);
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer la demande de réinitialisation du mot de passe
      await axios.post("http://localhost:8080/compte/forgot-password", { email });
      // Afficher un message de succès ou rediriger l'utilisateur
      alert("Un e-mail de réinitialisation de mot de passe a été envoyé.");
    } catch (error) {
      console.error("Erreur lors de la demande de réinitialisation du mot de passe:", error);
    }
  };

  return (
    <div className="modal show" style={{ display: "block" }}>
      <div
        className="modal-dialog position-absolute top-50 start-50 translate-middle custom-modal"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Connexion</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Se connecter
              </button>
              <div className="text-center">
                <a className=" text-black-50" href="#" onClick={handleResetPassword} >Mot de passe oublié?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
