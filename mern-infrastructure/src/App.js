import logo from './logo.svg';
import './App.css';
import {useState} from 'react:
import NewOrder from './pages/NewOrder';
import Auth from '.pages/auth';


function App() {
  const [user, setUser] = useState(null(;))
  return (
    <div className="App">
        {
          user?
          <NewOrder/>:
          <Auth/>
        }
    </div>
  );
}

export default App;
