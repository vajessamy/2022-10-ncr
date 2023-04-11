import "./App.css";
//Import route and our components
import { Route, Routes } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main"
import Price from "./pages/Price";
import Nav from "./Component/Nav";

export default function App () {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      {<Nav />}
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/currencies" element={<Currencies/>}/>
      <Route path="/price/:symbol" element={<Price/>}/>
    </Routes>
    </div>
  );
}


// const Component = () => {
//   // an array of dogs
//   const dogs = [
//     { name: "Sparky", age: 5 },
//     { name: "Spot", age: 5 },
//     { name: "Ralph", age: 5 },
//     { name: "Fido", age: 5 },
//   ]
//   // map over the dogs array and create an array of JSX for each dog
//   const dogJSX = dogs.map(dog => {
//     // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
//     return (
//       <div>
//         <h1>{dog.name}</h1>
//         <h2>{dog.age}</h2>
//       </div>
//     )
//   })

//   // the component returns JSX that uses the dogJSX array
//   return <div>{dogJSX}</div>
// }