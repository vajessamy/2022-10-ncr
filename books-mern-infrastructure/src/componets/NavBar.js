import { Link } from 'react-router-dom';

function NavBar() {
  
    return (
      <nav>
        <Link to="/books">Library</Link>
        &nbsp; | &nbsp;
        <Link to="/books/new">New Book</Link>
      </nav>
    );
  } 
  
  export default NavBar;