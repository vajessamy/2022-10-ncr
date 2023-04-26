// import SignUpForm from "../componets/SignUpForm";


// function Auth() {
//   return (
//     <div>
//        <h1>Auth Page</h1>
//        <SignUpForm/>
//     </div>
//   );
// } 

// export default Auth;
import { useState } from "react";
import LoginForm from "../components/LogInForm";
import SignUpForm from "../componets/SignUpForm";


function Auth() {
  
  return (
    <div>
      <h1>Auth Page</h1>
      <SignUpForm />
      <LoginForm />
    </div>
  );
}

export default Auth;