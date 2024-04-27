import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ResetPasswordPage() {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [accountDetails, setAccountDetails] = useState(null);

    useEffect(() => {
        // Envoyer le token au backend pour récupérer les détails du compte
        const fetchAccountDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/compte/reset-password?token=${token}`);
                
                setAccountDetails(response.data);
            } catch (error) {
                
                console.error('Erreur lors de la récupération des détails du compte:', error);
            }
        };
    
        fetchAccountDetails();
    }, [token]);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            return;
        }
        try {
            await axios.post("http://localhost:8080/compte/reset-password", { token, password });
            setSuccessMessage("Le mot de passe a été réinitialisé avec succès.");
        } catch (error) {
            setErrorMessage("Une erreur s'est produite lors de la réinitialisation du mot de passe.");
        }
    };

    return (
        <section className="reset-password">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        {accountDetails ? (
                            <div className="contact-one__form contact-one__form--contact">
                                <div className="sec-title">
                                    <h2 className="sec-title__title">Réinitialisation du mot de passe</h2>
                                </div>
                                <form id="contact-form" className="default-form2 contact-form-validated" onSubmit={handleResetPassword}>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input type="password" name="password" placeholder="Mots de Passe" value={password} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="input-box">
                                                <input type="password" name="confirmPassword" placeholder="Confirmation de votre Mots de Passe" value={confirmPassword} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
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
                        ) : (
                            <p>Chargement des détails du compte...</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResetPasswordPage;