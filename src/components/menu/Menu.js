import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
        <div class = 'nav'>
        <ul>
          <li>
            <Link to="/profile">Profile</Link>
          </li><hr></hr>
          <li>
            <Link to="/Admin">Admin</Link>
          </li><hr></hr>
          <li>
            <Link to="/User">User</Link>
          </li><hr></hr>
         
        </ul>
      </div>
      </div>
  )
};

export default Menu;