import './index.css';
import { useState } from 'react';
import NewBook from './pages/NewBook';
import Auth from './pages/Auth';
import BookLibrary from './pages/BookLibrary'
import { Routes, Route} from 'react-router-dom';
import NavBar from './componets/NavBar';


function App() {
 
  const[user, setUser] = useState(null);
  return (
    <div className="App">
      {
        user ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/books/new" element={<NewBook />}/>
            <Route path = "/books" element={<BookLibrary/>}/>
          </Routes> 
          </>:

          <Auth /> 
        }  
    </div>
  );
} 

export default App;
