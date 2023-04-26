import './index.css';
import { useState } from 'react';
import NewBook from './pages/NewBook';
import Auth from './pages/Auth';
import BookLibrary from './pages/BookLibrary'
import BookSearch from './pages/BookSearch'
import { Routes, Route} from 'react-router-dom';
import NavBar from './componets/NavBar';
import { getUser } from "./utilities/users-service"

function App() {

  const[user, setUser] = useState(getUser());
  return (
    <div className="App">
      {
        user ?
        <>
          <NavBar user={user.name} setUser={setUser}/>
          <Routes>
            <Route path ="/books/new" element={<NewBook />}/>
            <Route path = "/books" element={<BookLibrary/>}/>
            <Route path = "/books/Search" element={<BookSearch/>}/>
          </Routes> 
          </>:

          <Auth setUser={setUser}/> 
        }  
    </div>
  );
} 

export default App;

