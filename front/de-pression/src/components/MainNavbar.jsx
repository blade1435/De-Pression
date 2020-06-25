import React, { Component } from 'react';

class MainNavbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm container-fluid row justify-content-between">
                    <div>
                        <a href="/" className="navbar-brand">
                            <img src="../images/De-pression-logo.png" alt="Logo Dé-pression" className="logo-app" />
                        </a>
                    </div>
                    <h1 className="titre">DÉ-PRESSION</h1>
                    <div>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                            <span className="navbar-toggler-icon">
                                <img src="../images/open-menu.svg" alt="Show menu" className="toggle-menu" />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarMenu">
                            <div className="navbar-nav mr-auto">
                                <a href="/profil" className="nav-item nav-link">
                                    <img src="../images/user.svg" alt="Mon compte" className="logo-account" />
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default MainNavbar;