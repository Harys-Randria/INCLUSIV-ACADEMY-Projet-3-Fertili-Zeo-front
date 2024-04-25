import React from 'react';
import "./styless.css";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: process.env.PUBLIC_URL + '/assets/images/resources/user.png', // L'image par défaut
            typeCompte: '', // Nouveau state pour le type de compte
            nifStat: '', // Nouveau state pour le Nif_Stat
            nifStatError: '', // Nouveau state pour gérer l'erreur de Nif_Stat
            isSubmitted: false, // Nouveau state pour suivre l'état de soumission du formulaire
        };
    }

    handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState({
                    imageUrl: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    }

    handleTypeCompteChange = (e) => {
        this.setState({
            typeCompte: e.target.value,
        });
    }

    handleNifStatChange = (e) => {
        const nifStatValue = e.target.value;
        this.setState({
            nifStat: nifStatValue,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Mettre à jour l'état de soumission
        this.setState({ isSubmitted: true });

        // Vérifier si le Nif_Stat a exactement 12 chiffres
        if (this.state.nifStat.length !== 12) {
            this.setState({
                nifStatError: 'Le Nif_Stat doit contenir exactement 12 chiffres.',
            });
            return;
        }

        // Continuer avec le traitement du formulaire si tout est valide
        console.log('Formulaire soumis avec succès !');
        // Ajoutez ici votre code pour envoyer les données à votre backend, etc.
    }

    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            
                <section className="contact-page">
                    <div className="container">
                        <div className="row">

                            {/* Start Contact One Form Contact */}
                            <div className="col-xl-8">
                                <div className="contact-one__form contact-one__form--contact">
                                    <div className="sec-title">
                                        <h2 className="sec-title__title">Profile Utilisateur</h2>
                                    </div>

                                    <form id="contact-form" className="default-form2 contact-form-validated" onSubmit={this.handleSubmit}>


                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="name" placeholder="Nom" required="" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="email" name="email" placeholder="Email" required="" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" placeholder="Télephone" name="phone" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" placeholder="Adresse" name="Adresse" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Champ pour Nif_Stat avec gestion d'erreur */}
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="nifStat" placeholder="Nif_Stat" value={this.state.nifStat} onChange={this.handleNifStatChange} className={`form-control ${this.state.isSubmitted && this.state.nifStat.length !== 12 && 'is-invalid'}`} />
                                                    {this.state.isSubmitted && this.state.nifStat.length !== 12 && <div className="invalid-feedback">Le Nif_Stat doit contenir exactement 12 chiffres.</div>}
                                                </div>
                                            </div>

                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="input-box">
                                                    <input type="text" name="cin" placeholder="CIN" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">


                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="contact-one__form-btn">
                                                    <button className="thm-btn" type="submit" data-loading-text="Please wait...">
                                                        <span className="txt">Enregistrer</span>
                                                        <i ></i>
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
    <div className="shape3 flex align-items-center " id='a'>
        <div className="contact-page__img" id='i'>
            <img src={this.state.imageUrl} alt="#" />
        </div>
        <div className="contact-page__btn ms-4 ps-3 mt-3 h-15" id="b">
            <label htmlFor="imageInput" className="thm-btn">
                Changer photos
                <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
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
