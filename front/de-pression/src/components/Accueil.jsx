import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";

class Accueil extends Component {

    render() {

        return (
            <div className="page-accueil">
                <div>
                    <MainNavbar />
                </div>
                <div className="container-fluid column justify-content-center align-content-center col-6 ">

                    <div className="container justif-content-center text-center bouton-connectOne">
                        <Link to="/authentification">
                            <button type="button" class="btn btn-info">SE CONNECTER</button>
                        </Link>
                    </div>
                    <div className="container justif-content-center text-center bouton-connectTwo">
                        <Link to="/newprofile">
                            <button type="submit" class="btn btn-info"> S'INSCRIRE</button>
                        </Link>
                    </div>
                </div>
                <div className="container-fluid element-app ">
                    <img src='https://media2.giphy.com/media/xUOxfkTcPK36fYcjC0/200w.webp?cid=ecf05e47db561d40f92d5c9d3b0a7aebb383ad3daafe5813&rid=200w.webp' alt='joie' />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Accueil;
