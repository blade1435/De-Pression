import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';


class Profil extends Component {
    render() {
        return (
            <div className="container-fluid">
                <MainNavbar />
                <div className="container-profil col-10">
                    <div className="section-profil">
                        <h2 className="titreProfil">Mon profil</h2>
                        <p>Nom :</p>
                        <p>Prénom :</p>
                        <p>Adresse :</p>
                        <p>Email :</p>
                        <p>Tel :</p>
                        <p>Mot de passe :</p>
                        <p>Date de naissance :</p>
                        <p>Mes Pathologie</p>
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
                    <div className="section-profil">
                        <h3 className="titreProfil">Gestion de  mon compte</h3>
                        <p>Gestion des contacts d'urgence</p>
                        <p>Modifier le mot de passe</p>
                        <p>Supprimer mon compte</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Profil;