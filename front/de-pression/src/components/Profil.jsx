import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
class Profil extends Component {
    render() {
        return (
            <div className="container-fluid">
                <MainNavbar />
                <div className="container-profil container-fluid column justify-content-center align-items-center col-lg-6 col-md-8 col-sm-10">
                    <div className="sous-section-out container row justify-content-center">
                        <Link to="/board">
                            <button className="btn">Accéder à mon tableau</button>
                        </Link>
                    </div>
                    <div className="section-profil">
                        <h2 className="titreProfil">Mon profil</h2>
                        <div className="sous-section">
                            <p>Nom :</p>
                            <p>Prénom :</p>
                            <p>Date de naissance :</p>
                            <p>Adresse :</p>
                            <p>Email :</p>
                            <p>Tel :</p>
                        </div>
                        <div className="sous-section">
                            <p>Mes pathologies</p>
                        </div>
                    </div>
                    <div className="sous-section-out container row justify-content-center">
                        <button className="btn">Modifier mon profil</button>
                    </div>
                    <div className="section-profil">
                        <h2 className="titreProfil">Mes préférences</h2>
                        <p>Gestion des alertes de medicaments</p>
                        <p>Historique des rappels de médicaments </p>
                        <p>Gestion des alertes des rendez vous</p>
                        <p>Historique des rendez vous </p> 
                        <p>Mes médecins</p>
                        <p>Mes médicaments</p>
                        <p>Gestion de mes dashboard</p>
                    </div>
                    <div className="sous-section-out container row justify-content-center">
                        <button className="btn">Gérer mes préférences</button>
                    </div>
                    <div className="section-profil">
                        <h3 className="titreProfil">Paramètres du compte</h3>
                        <p>Gestion des contacts d'urgence</p>
                        <p>Modifier le mot de passe</p>
                        <p>Supprimer mon compte</p>
                    </div>
                    <div className="sous-section-out row container justify-content-center">
                        <button className="btn">Modifier mes paramètres</button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Profil;