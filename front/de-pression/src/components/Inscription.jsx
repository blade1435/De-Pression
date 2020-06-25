import React, { Component } from 'react';

class Inscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {
                pseudo: "",
                email: "",
                password: ""
            }
        }
    }

    PseudoField = event => {
        this.setState({ pseudo: event.target.value });
    }
    Emailield = event => {
        this.setState({ email: event.target.value });
    }
    PasswordField = event => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = event => {
        const { pseudo, email, password } = this.state;
        event.preventDefault()
        console.log(this.state);

        fetch("/auth/signup",
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({ pseudo, email, password }),
            })
            .then(res => res.json())
            .then(
                res => this.setState({ flash: res.flash, isFlash: true }),
                err => this.setState({ flash: err.flash, isFlash: true })
            );
    }
    render() {
        const { PseudoField } = this;
        const { EmailField } = this;
        const { PasswordField } = this;
        const { handleSubmit } = this;
        return (
            <div>
                <form onSubmit={handleSubmit} className="formulaire">
                    <input
                        label="Pseudo"
                        type="pseudo"
                        name="peudo"
                        onChange={PseudoField}
                        required />
                    <input
                        label="Email"
                        type="email"
                        name="email"
                        onChange={EmailField}
                        required />
                    <input
                        label="Password"
                        type="password"
                        name="password"
                        onChange={PasswordField}
                        required />
                    <button variant="contained" color="primary" type="submit">
                        Submit
                        </button>

                </form>
            </div>
         );
    }
}
 
export default Inscription;