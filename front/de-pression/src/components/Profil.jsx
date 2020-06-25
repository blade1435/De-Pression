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
                        <h2>Mon profil</h2>
                        <p>Nom, Prénom, etc</p>
                    </div>
                    <div className="section-profil">
                        <h2>Mes préférences</h2>
                        <p>Alertes, Affichage etc</p>
                    </div>
                    <div>
                        <h3>Supprimer mon compte</h3>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Profil;