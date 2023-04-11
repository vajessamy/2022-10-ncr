// import "./styles.css";
// import Counter from "./Counter";
// import { useState } from "react";

// export default function App() {
//   const[counter, setCounter] = useState(0);
//   return(
//     <div classNam ="App">
//       <Counter counter={counter} setCounter={setCounter}/>
//     </div>
//   );
// }
import Counter from "./Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter} />
    </div>
  );
}
