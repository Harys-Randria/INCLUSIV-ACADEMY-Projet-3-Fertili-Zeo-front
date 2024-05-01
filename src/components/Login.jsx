import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

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
      sessionStorage.setItem("photo", response.data.photo);

      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  return (
    <div
      className="modal"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="custom-modal-dialog"
        role="document"
        style={{
          width: "50%",
          maxWidth: "600px",
          minWidth: "300px",
          margin: "auto",
          borderRadius: "10px",
        }}
      >
        <div
          className="custom-modal-content"
          style={{
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
          }}
        >
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
          <h5 className="modal-titlecon text-center">Connexion</h5>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ minHeight: "40px" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ minHeight: "40px" }}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="thm-btn ms-5">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
