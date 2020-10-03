// import React from "react";
// import "./Home.css";
// import LoginForm from "../components/loginForm/LoginForm";
// // import Menu from "../components/menu/Menu";
// import { userIsNotAuthenticated } from "../redux/HOCs";
// import RegistrationForm from "../components/RegisterForm/RegisterForm";

// class Home extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showLogin: true,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Kwitter</h1>
//         <h2>Blog Away</h2>
//         <LoginForm />

//         <br />


//         <h2>Register</h2>
//         <RegistrationForm />
//       </div>
//     );
//   }
// }

// export default userIsNotAuthenticated(Home);using ericks homejs
import React from "react";
import LoginForm from "../components/loginForm/LoginForm"
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm"



class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showLogin: true
    }
  }

  render() {
    return (
      <div className="Home">
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <hr />
        <h2> Register Here</h2>
        <RegistrationForm />
      </div>
    );
  }
}

export default userIsNotAuthenticated(Home);