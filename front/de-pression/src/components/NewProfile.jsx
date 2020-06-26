// import React, { Component } from "react";
// import MainNavbar from './MainNavbar';
// import Footer from './Footer';
// import {
//   Link
// } from 'react-router-dom';

// class NewProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//     }
//   }
//   submitField = (event) => {
//     event.preventDefault();
//     console.log("submit");
//     const data = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password
//     }


//     fetch("http://localhost:8000/api/user/",
//       {
//         method: 'POST',
//         headers: new Headers({
//           'Content-Type': 'application/json'
//         }),
//         body: JSON.stringify(data),
//       })
//       .then(res => res.json())
//       .catch(error => console.log(error));

//     // .then(
//     //   res => this.setState({ flash: res.flash, isFlash: true }),
//     //   err => this.setState({ flash: err.flash, isFlash: true })
//     // );

//   }

//   handlechange = (event) => {
//     event.preventDefault();
//     switch (event.target.id) {
//       case "inputFirstName":
//         this.setState({ name: event.target.value })
//         break;
//       case "inputEmail4":
//         this.setState({ email: event.target.value })
//         break;
//       case "inputPassword4":
//         this.setState({ password: event.target.value })
//         break;

//       default:
//         break;
//     }
//   }
//   render() {
//     return (
//         <div>
//           <MainNavbar />
//           <form className="container-fluid ">
//             <div className="">
//               <div className="col">
//                 <label htmlFor="">Nom</label>
//                 <input
//                   type="text"
//                   id="inputFirstName"
//                   className="form-control"
//                   placeholder="Simpson"
//                   value={this.state.name}
//                   onChange={this.handlechange}
//                 />
//               </div>
//               <div className="col">
//                 <label htmlFor="">Prénom</label>
//                 <input
//                   type="text"
//                   id="inputLastName"
//                   className="form-control"
//                   placeholder="Homer"
//                 />
//               </div>
//               <div>
//                 <div className="col">
//                   <label htmlFor="">Email</label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="inputEmail4"
//                     placeholder="Email"
//                     value={this.state.email}
//                     onChange={this.handlechange}
//                   />
//                 </div>
//                 <div className="col">
//                   <label htmlFor="">Mot de passe</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="inputPassword4"
//                     placeholder="Mot de passe"
//                     value={this.state.password}
//                     onChange={this.handlechange}
//                   />
//                 </div>
//                 <div className="form-group col">
//                   <label htmlFor="">Addresse</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="inputAddress"
//                     placeholder="1234 Main St"
//                   />
//                 </div>
//                 <div className="form-row col">
//                   <div className="">
//                     <label htmlFor="inputCity ">City</label>
//                     <input type="text" className="form-control" id="inputCity" />
//                   </div>
//                   <div className="form-group col-md-4">
//                     <label htmlFor="inputState color-6920B0">State</label>
//                     <select id="inputState" className="form-control">
//                       <option selected>Choose...</option>
//                       <option>...</option>
//                     </select>
//                   </div>
//                   <div className="">
//                     <label htmlFor=" ">Zip</label>
//                     <input type="text" className="form-control" id="inputZip" />
//                   </div>
//                 </div>
//                 <div className="form-group col">
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       id="gridCheck"
//                     />
//                     <label className="form-check-label" htmlFor="gridCheck">
//                       se souvenir de moi
//                   </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <Link to="/">
//             <div className="but">
//               <button onClick={(event) => this.submitField(event)} class="btn btn-info">
//                 S'Inscrire
//           </button>
//             </div>
//             </Link>
//           </form>
//           <Footer />
//         </div>

//     );
//   }
// }


// export default NewProfile;

import React, { Component } from "react";
import MainNavbar from './MainNavbar';
import Footer from './Footer';
import {
  Link
} from 'react-router-dom';


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
      <div>
        <MainNavbar />
        <form className="form-signup container-fluid column col-lg-7 col-md-10">
          <div className="">
            <div className="col">
              <label htmlFor="">Nom</label>
              <input
                type="text"
                id="inputFirstName"
                className="form-control"
                placeholder="Entrez votre nom"
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
                placeholder="Entrez votre prénom"
              />
            </div>
            <div>
              <div className="col">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Entrez votre Email"
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
                  placeholder="Entrez votre mot de passe"
                  value={this.state.password}
                  onChange={this.handlechange}
                />
              </div>
              <div className="form-group col">
                <label htmlFor="">Numéro et libellé de la voie</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Entrez votre adresse"
                />
              </div>
              <div className="form-row container-fluid row col-12">
                <div className="col-4 col-xs-6">
                  <label htmlFor="inputCity ">Localité</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-4 col-xs-6">
                  <label htmlFor="inputState color-6920B0">Région</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choisissez une option...</option>
                    <option>Auvergne Rhône-Alpes</option>
                    <option>Bourgogne France-Comté</option>
                    <option>Bretagne</option>
                    <option>Centre-Val de Loire</option>
                    <option>Corse</option>
                    <option>Grand Est</option>
                    <option>Hauts-de-France</option>
                    <option>Île-de-France</option>
                    <option>Normandie</option>
                    <option>Nouvelle-Aquitaine</option>
                    <option>Occitanie</option>
                    <option>Pays de la Loire</option>
                    <option>Provence-Alpes-Côte d'Azur</option>
                    <option>Guadeloupe</option>
                    <option>Martinique</option>
                    <option>Guyane</option>
                    <option>La Réunion</option>
                    <option>Mayotte</option>
                  </select>
                </div>
                <div className="col-4 col-xs-6">
                  <label htmlFor=" ">Code Postal</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group container-fluid row justify-content-around align-items-center bloc-signup">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Se souvenir de moi
                    </label>
                </div>
                <Link to="/">
                  <div className="but bordere-white">
                    <button onClick={(event) => this.submitField(event)} class="btn btn-info">
                      S'inscrire
                    </button>
                    </div>
                </Link>
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    );
  }
}
export default NewProfile;