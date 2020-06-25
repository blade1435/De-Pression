import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark container col-12 column">
                <button className="navbar-toggler" data-toggle="collapse" data-target=".navbar-footer">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="col-sm-12 collapse navbar-collapse navbar-footer">

                    <div className="row navbar-nav mr-auto col-sm-4">
                        <a className="nav-link nav-item col-sm-11" href="/">Nous connaître</a>
                        <a className="nav-link nav-item col-sm-11" href="/">FAQ</a>
                        <a className="nav-link nav-item col-sm-11" href="/">Partenaires</a>
                    </div>

                    <div className="row navbar-nav mr-auto col-sm-4">
                        <a className="nav-link nav-item col-sm-11" href="/">Confidentialité</a>
                        <a className="nav-link nav-item col-sm-11" href="/">Conditions d'utilisation</a>
                        <a className="nav-link nav-item col-sm-11" href="/">Mentions légales</a>
                    </div>

                    <div className="bolded row navbar-nav mr-auto col-sm-4">
                        <a className="nav-link nav-item col-sm-11" href="/">Dé-pression.fr</a>
                        <a className="nav-link nav-item col-sm-11" href="/">Nous suivre sur Instagram</a>
                    </div>
                </div>
        </nav>
        );
    }
}

export default Footer;