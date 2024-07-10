/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NavItem = ({ to, icon, label }) => {
  return (
    <Link to={to} className="nav-link">
      <li className="nav-list">
        {icon}
        <p>{label}</p>
      </li>
    </Link>
  );
};

export default NavItem;
