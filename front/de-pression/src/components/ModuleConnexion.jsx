import React, { useState } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Tooltip
} from 'reactstrap';

function ModuleConnexion(props) {

    const [tooltipOpenOne, setTooltipOpenOne] = useState(false);
    const [tooltipOpenTwo, setTooltipOpenTwo] = useState(false);

    const toggleOne = () => setTooltipOpenOne(!tooltipOpenOne);
    const toggleTwo = () => setTooltipOpenTwo(!tooltipOpenTwo);

    return ( 
        <div className="module-connexion container-fluid column col-sm-6 col-lg-4 align-items-center">
            <h3 className="text-center auth-title">Pour continuer, connectez-vous à Dé-pression</h3>

            <div className="auth-key-container container row justify-content-center">
                <img src='https://i.pinimg.com/originals/46/8e/fa/468efa115ce8dc3a1020f5df3f928369.gif' alt='Clé qui ouvre une porte' className="auth-key" />
            </div>

            <Form className="login-form">
                <FormGroup>
                    <Label for="emailLogin">Identifiant</Label>
                    <Tooltip placement="top" isOpen={tooltipOpenOne} target="emailLogin" toggle={toggleOne}>
                        Votre identifiant correspond à l'adresse mail que vous avez utilisé lors de votre inscription
                    </Tooltip>
                    <Input type="email" name="email" id="emailLogin" placeholder="Taper votre identifiant" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Mot de passe</Label>
                    <Tooltip placement="top" isOpen={tooltipOpenTwo} target="passwordLogin" toggle={toggleTwo}>
                    Votre mot de passe correspond au mot de passe que vous avez saisi lors de votre inscription
                    </Tooltip>
                    <Input type="password" name="password" id="passwordLogin" placeholder="Taper votre mot de passe" />
                </FormGroup>
                <div className="container-fluid row justify-content-between align-items-center col-12">
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />{' '}
                        Se souvenir de moi
                        </Label>
                    </FormGroup>
                    <Button className="connect-login">Se connecter</Button>
                </div>
            </Form>
        </div>
    );
} 

export default ModuleConnexion;