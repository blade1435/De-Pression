import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

class Accueil extends Component {
    
    render() {
        
        return (
            <div className="page-accueil">
                <MainNavbar />
                    <div className="container-fluid column justify-content-center align-content-center col-4">
                        <div className="container justif-content-center text-center bouton-connect">
                            SE CONNECTER
                        </div>
                        <div className="container justif-content-center text-center bouton-connect">
                           S'INSCRIRE
                        </div>
                        <div className="element-app">
                            <img src='https://media2.giphy.com/media/xUOxfkTcPK36fYcjC0/200w.webp?cid=ecf05e47db561d40f92d5c9d3b0a7aebb383ad3daafe5813&rid=200w.webp' alt='joie' />
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Accueil;
