import React, { useState } from 'react';
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { 
    Dropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem } from 'reactstrap';
function Articles() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
        return (
            <div>
                <div>
                    <MainNavbar />
                </div>
                <div className="main-board container column justify-content-center align-items-center col-10">
                    <div className="navbar-board container column justify-content-center">
                        <div className="sous-section-out container row justify-content-center">
                            <Link to="/board">
                                <button className="btn">Voir mon tableau</button>
                            </Link>
                        </div>
                        <div className="manage-board row justify-content-center">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="dropdown">
                            <DropdownToggle caret>
                                Filtrer
                                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Type</DropdownItem>
                                <DropdownItem className="dropdown-item">Image</DropdownItem>
                                <DropdownItem>Musique</DropdownItem>
                                <DropdownItem>Texte</DropdownItem>
                                <DropdownItem>Vidéo</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Thème</DropdownItem>
                                <DropdownItem className="dropdown-item">Famille</DropdownItem>
                                <DropdownItem>Nature</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem header>Voir tous les filtres</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn my-2 my-sm-0" type="submit">Rechercher</button>
                            </form>
                        </div>
                    <div className="grid-container container-fluid col-10 row">
                        {/* <div key="key1" className="pink-background small-wd-box small-hg-box">Item 1</div>
                        <div key="key2" className="purple-background big-wd-box big-hg-box">Item 2</div>
                        <div key="key3" className="yellow-background small-wd-box small-hg-box">Item 3</div>
                        <div key="key4" className="purple-background medium-wd-box big-hg-box">Item 4</div>
                        <div key="key5" className="pink-background medium-wd-box medium-hg-box">Item 5</div>
                        <div key="key6" className="purple-background big-wd-box small-hg-box">Item 6</div>
                        <div key="key7" className="blue-pattern-background medium-wd-box big-hg-box">Item 7</div>
                        <div key="key8" className="green-pattern-background small-wd-box big-hg-box">Item 8</div>
                        <div key="key9" className="blue-pattern-background big-wd-box medium-hg-box">Item 9</div>
                        <div key="key10" className="purple-background medium-wd-box big-hg-box">Item 10</div>
                        <div key="key11" className="pink-background big-wd-box medium-hg-box">Item 11</div>
                        <div key="key12" className="purple-background small-wd-box small-hg-box">Item 12</div>
                        <div key="key13" className="blue-pattern-background big-wd-box big-hg-box">Item 13</div>
                        <div key="key14" className="green-pattern-background medium-wd-box medium-hg-box">Item 14</div>
                        <div key="key15" className="blue-pattern-background big-wd-box small-hg-box">Item 15</div> */}
                        <img src="https://i.imgur.com/lo0JkaO.png" />
                    </div>
                </div>
                </div>
                <div className="foote">
                    <Footer />
                </div>
            </div>
        );
}
export default Articles;