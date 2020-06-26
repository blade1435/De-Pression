import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";

class Articles extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <MainNavbar />
                </div>
                <div className="main-board">

                    <div className="sous-section-out container row justify-content-center">
                        <Link to="/board">
                            <button className="btn">Accéder à mon tableau</button>
                        </Link>
                    </div>

                </div>
                <div className="foote">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Articles;