import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Tooltip
} from 'reactstrap';

class ModuleConnexion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                email: "",
                password: "",
                tooltipOne: false,
                tooltipTwo: false
            }
        };
    }

    tooltipOpenOne = () => {
        this.setState({
            tooltipOne: !this.state.tooltipOne
        });
    };

    tooltipOpenTwo = () => {
        this.setState({
            tooltipTwo: !this.state.tooltipTwo
        });
    };

    toggleOne = () => {
        this.tooltipOpenOne()
    };

    toggleTwo = () => {
        this.tooltipOpenTwo()
    };


    EmailField = event => {
        this.setState({ email: event.target.value });
    };

    PasswordField = event => {
        this.setState({ password: event.target.value });
    };
 
    handleSubmit = event => {
        const { email, password } = this.state;
        event.preventDefault()
        console.log(this.state);

        fetch("/auth/authentification",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({ email, password }),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ flash: res.flash, isFlash: true }),
                err => this.setState({ flash: err.flash, isFlash: true })
            );
    };


    render() {
        const { toggleOne } = this;
        const { toggleTwo } = this;
        const { tooltipOpenOne } = this;
        const { tooltipOpenTwo } = this;
        const { EmailField } = this;
        const { PasswordField } = this;
        const { handleSubmit } = this;

        return (
            <div className="module-connexion container-fluid column col-sm-6 col-lg-4 align-items-center">
                <h3 className="text-center auth-title">Pour continuer, connectez-vous à Dé-pression</h3>

                <div className="auth-key-container container row justify-content-center">
                    <img src='https://i.pinimg.com/originals/46/8e/fa/468efa115ce8dc3a1020f5df3f928369.gif' alt='Clé qui ouvre une porte' className="auth-key" />
                </div>

                <Form className="login-form" onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email-login">Identifiant</Label>
                        {/* <Tooltip placement="top" isOpen={tooltipOpenOne} target="email-login" toggle={toggleOne}>
                            Votre identifiant correspond à l'adresse mail que vous avez utilisé lors de votre inscription
                        </Tooltip> */}
                        <Input type="email" name="email" id="email-login" placeholder="Taper votre identifiant" onChange={EmailField} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password-login">Mot de passe</Label>
                        {/* <Tooltip placement="top" isOpen={tooltipOpenTwo} target="password-login" toggle={toggleTwo}>
                            Votre mot de passe correspond au mot de passe que vous avez saisi lors de votre inscription
                        </Tooltip> */}
                        <Input type="password" name="password" id="password-login" placeholder="Taper votre mot de passe" onChange={PasswordField} required />
                    </FormGroup>
                    <div className="container-fluid row justify-content-between align-items-center col-12">
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                        Se souvenir de moi
                        </Label>
                        </FormGroup>
                        
                        <Button type="submit" className="connect-login" >Se connecter</Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default ModuleConnexion;