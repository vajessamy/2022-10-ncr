
// import { useState } from "react";
// import {signUp } from '../utilities/users-service'

// function SignUpForm() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirm: '',
//     error: ''
//   })

//   const [disable, setDisable] = useState(false)

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//         const sanitizedFormData = {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password
//     }
//     const user = await signUp
//     (sanitizedFormData);
//     console.log(user)
// } catch {
//             setFormData({...formData, error: 
//                 'Signup Failed! Try Again!'})
//         }
//     }

//   const handleChange = (event) => {
//     setFormData({...formData, [event.target.name]: event.target.value})
//   }

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             onChange={handleChange}
//             required 
//           />
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             name="email"
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="confirm">Confirm Password</label>
//           <input
//             type="password"
//             name="confirm"
//             onChange={handleChange}
//             required
//           />
//           <button type="submit"
//             disabled={disable}>SIGN UP</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{formData.error}</p>
//     </div>
//   );
// }

// export default SignUpForm;
import { useState } from "react";
import { signUp } from '../utilities/users-service';

function SignUpForm({ setUser }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const [disable, setDisable] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const sanitizedFormData = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      }
      const user = await signUp(sanitizedFormData);
      setUser(user);
    } catch {
      setFormData({...formData, error: 'Sign up failed! Try again!'})
    }
  }

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required 
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={disable}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}

export default SignUpForm;