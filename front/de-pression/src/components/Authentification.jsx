import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import ModuleConnexion from './ModuleConnexion';

class Authentification extends Component {

    render() { 
        return ( 
            <div className="container-fluid">
                <MainNavbar /> 
                <ModuleConnexion />
                <Footer />
            </div>
        );
    }
}

export default Authentification;