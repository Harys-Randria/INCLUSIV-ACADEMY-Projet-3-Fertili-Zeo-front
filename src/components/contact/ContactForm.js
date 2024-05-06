import React from "react";
import "./styless.css";
import axios from "axios";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: process.env.PUBLIC_URL + "/assets/images/resources/user.png", // L'image par défaut
      typeCompte: "", // Nouveau state pour le type de compte
      nif_stat: sessionStorage.getItem("nif_stat"), // Nouveau state pour le Nif_Stat
      nifStatError: "", // Nouveau state pour gérer l'erreur de Nif_Stat
      isSubmitted: false, // Nouveau state pour suivre l'état de soumission du formulaire
      name: sessionStorage.getItem("name"),
      phone: sessionStorage.getItem("phone"),
      email: sessionStorage.getItem("email"),
      cin: sessionStorage.getItem("cin"),
      address: sessionStorage.getItem("address"),
      type: sessionStorage.getItem("type"),
      id: sessionStorage.getItem("id"),
      photopro: null,
    };

    if (
      sessionStorage.getItem("photo") !== "null" &&
      sessionStorage.getItem("photo") !== null
    ) {
      const imageDataString = sessionStorage.getItem("photo");

      // Convertir la chaîne de caractères en un objet blob
      const byteCharacters = atob(imageDataString);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: "image/jpeg" }); // Adjust type as needed

      // Créer une URL blob pour l'image
      const imageProfil = URL.createObjectURL(blob);
      sessionStorage.setItem("imageProfil", imageProfil);
    }
  }

  handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          imageUrl: reader.result,
          photopro: file, // Modification ici pour assigner la valeur de file à photopro
        });
        sessionStorage.setItem("imageProfil", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const compte = {
      nif_stat: this.state.nif_stat,
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      cin: this.state.cin,
      address: this.state.address,
    };
    const formData = new FormData();
    formData.append("compte", JSON.stringify(compte));
    formData.append("photo", this.state.photopro);
    const identifiant = sessionStorage.getItem("id");
    try {
      await axios.post(
        `http://localhost:8080/compte/updateCompte/${identifiant}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

  render() {
    return (
      <section style={{ marginTop: "-100px" }} className="contact-page">
        <div className="container">
          <div className="row">
            {/* Start Contact One Form Contact */}
            <div className="col-xl-8">
              <div className="contact-one__form contact-one__form--contact">
                <div className="sec-title">
                  <h2 className="sec-title__title">Profile Utilisateur</h2>
                </div>

                <form
                  id="contact-form"
                  className="default-form2 contact-form-validated"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder={
                            sessionStorage.getItem("name") !== null &&
                            sessionStorage.getItem("name") !== "null"
                              ? ""
                              : "Nom"
                          }
                          name="name"
                          className="form-control"
                          value={
                            sessionStorage.getItem("name") !== null &&
                            sessionStorage.getItem("name") !== "null"
                              ? sessionStorage.getItem("name")
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ name: value });
                            sessionStorage.setItem("name", value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="email"
                          placeholder={
                            sessionStorage.getItem("email") !== null &&
                            sessionStorage.getItem("email") !== "null"
                              ? ""
                              : "Email"
                          }
                          name="email"
                          className="form-control"
                          value={
                            sessionStorage.getItem("email") !== null &&
                            sessionStorage.getItem("email") !== "null"
                              ? sessionStorage.getItem("email")
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ email: value });
                            sessionStorage.setItem("email", value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder={
                            sessionStorage.getItem("phone") !== null &&
                            sessionStorage.getItem("phone") !== "null"
                              ? ""
                              : "Télephone"
                          }
                          name="phone"
                          className="form-control"
                          value={
                            sessionStorage.getItem("phone") !== null &&
                            sessionStorage.getItem("phone") !== "null"
                              ? sessionStorage.getItem("phone")
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ phone: value });
                            sessionStorage.setItem("phone", value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder={
                            sessionStorage.getItem("address") !== null &&
                            sessionStorage.getItem("address") !== "null"
                              ? ""
                              : "Adresse"
                          }
                          name="address"
                          className="form-control"
                          value={
                            sessionStorage.getItem("address") !== null &&
                            sessionStorage.getItem("address") !== "null"
                              ? sessionStorage.getItem("address")
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ address: value });
                            sessionStorage.setItem("address", value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Champ pour Nif_Stat avec gestion d'erreur */}
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder={
                            sessionStorage.getItem("nif_stat") !== null &&
                            sessionStorage.getItem("nif_stat") !== "null"
                              ? ""
                              : "Nif_Stat"
                          }
                          name="nif_stat"
                          className="form-control"
                          value={
                            sessionStorage.getItem("nif_stat") !== null &&
                            sessionStorage.getItem("nif_stat") !== "null"
                              ? sessionStorage.getItem("nif_stat")
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ nif_stat: value });
                            sessionStorage.setItem("nif_stat", value);
                          }}
                        />
                        {/* {this.state.isSubmitted &&
                          this.state.nifStat.length !== 12 && (
                            <div className="invalid-feedback">
                              Le Nif_Stat doit contenir exactement 12 chiffres.
                            </div>
                          )} */}
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="input-box">
                        <input
                          type="text"
                          placeholder={
                            sessionStorage.getItem("cin") !== null &&
                            sessionStorage.getItem("cin") !== "null"
                              ? ""
                              : "CIN"
                          }
                          name="cin"
                          className="form-control"
                          value={
                            sessionStorage.getItem("cin") !== null &&
                            sessionStorage.getItem("cin") !== "null"
                              ? sessionStorage.getItem("cin")
                              : ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            this.setState({ cin: value });
                            sessionStorage.setItem("cin", value);
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="contact-one__form-btn">
                        <button
                          className="thm-btn"
                          type="submit"
                          data-loading-text="Please wait..."
                        >
                          <span className="txt">Enregistrer</span>
                          <i></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* End Contact One Form Contact */}

            {/* Image utilisateur et bouton Changer l'image */}
            <div className="col-xl-4 d-flex justify-content-center">
              <div className="shape3 flex align-items-center " id="a">
                <div className="contact-page__img" id="i">
                  <img
                    src={
                      sessionStorage.getItem("imageProfil") !== null &&
                      sessionStorage.getItem("imageProfil") !== "null"
                        ? sessionStorage.getItem("imageProfil")
                        : this.state.imageUrl
                    }
                    alt="#"
                  />
                </div>
                <div className="contact-page__btn ms-4 ps-3 mt-3 h-15" id="b">
                  <label htmlFor="imageInput" className="thm-btn">
                    Changer photos
                    <input
                      id="imageInput"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={this.handleImageChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Fin de l'image utilisateur */}
          </div>
        </div>
      </section>
    );
  }
}
