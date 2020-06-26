import React, { Component } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
import StackGrid from "react-stack-grid";

class Board extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div>
                    <MainNavbar />
                </div>
                <div className="main-board">

                    <div className="sous-section-out container row justify-content-center">
                        <Link to="/articles">
                            <button className="btn">Voir des suggestions</button>
                        </Link>
                    </div>

                    <StackGrid
                        columnWidth={150}
                    >
                        <div key="key1">
                            <img src="https://media.tenor.com/images/75ed46f4833ddfd3316dd45d8fae1393/tenor.gif" />
                        </div>

                        <div key="key2">
                            <img src="https://about.canva.com/wp-content/uploads/sites/3/2018/03/Motivation-3.png" />
                        </div>

                        <div key="key3">
                            Item 3
                        </div>
                    </StackGrid>

                </div>
                <div className="foote">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Board;