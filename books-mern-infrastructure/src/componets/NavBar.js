
//   export default NavBar;
import { Link } from 'react-router-dom';
import * as userService from '../utilities/users-service'

function NavBar({ user, setUser }) {

  const handleLogOut = () => {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/books">Favorites</Link>
         &nbsp; | &nbsp;
         <Link to="/books/new">Add Book</Link>
         &nbsp; | &nbsp;
         <Link to="/books/Search">Book Search</Link>
         &nbsp; 
         <span>  WELCOME {user}  </span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}

export default NavBar;
