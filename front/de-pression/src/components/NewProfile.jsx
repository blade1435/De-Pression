import React, { Component } from "react";
import MainNavbar from './MainNavbar';
import Footer from './Footer';


class NewProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    }
  }
  submitField = (event) => {
    event.preventDefault();
    console.log("submit");
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }


    fetch("http://localhost:8000/api/user/",
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data),
      })
      .then(res => res.json())
      .catch(error => console.log(error));

    // .then(
    //   res => this.setState({ flash: res.flash, isFlash: true }),
    //   err => this.setState({ flash: err.flash, isFlash: true })
    // );

  }

  handlechange = (event) => {
    event.preventDefault();
    switch (event.target.id) {
      case "inputFirstName":
        this.setState({ name: event.target.value })
        break;
      case "inputEmail4":
        this.setState({ email: event.target.value })
        break;
      case "inputPassword4":
        this.setState({ password: event.target.value })
        break;

      default:
        break;
    }
  }
  render() {
    return (
      <div >
        <MainNavbar />
        <form className="container-fluid ">
          <div className="">
            <div className="col">
              <label htmlFor="">Nom</label>
              <input
                type="text"
                id="inputFirstName"
                className="form-control"
                placeholder="Simpson"
                value={this.state.name}
                onChange={this.handlechange}
              />
            </div>
            <div className="col">
              <label htmlFor="">Prénom</label>
              <input
                type="text"
                id="inputLastName"
                className="form-control"
                placeholder="Homer"
              />
            </div>
            <div>
              <div className="col">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handlechange}
                />
              </div>
              <div className="col">
                <label htmlFor="">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Mot de passe"
                  value={this.state.password}
                  onChange={this.handlechange}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="">Addresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-row col">
                <div className="">
                  <label htmlFor="inputCity ">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState color-6920B0">State</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor=" ">Zip</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group col">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    se souvenir de moi
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="but">
            <button onClick={(event) => this.submitField(event)} class="btn btn-info">
              S'Inscrire
          </button>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}


export default NewProfile;
