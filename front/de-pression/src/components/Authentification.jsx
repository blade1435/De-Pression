import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import ModuleConnexion from './ModuleConnexion';

class Authentification extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <MainNavbar />
                    <ModuleConnexion />
                </div>
                <div className="foote">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Authentification;

