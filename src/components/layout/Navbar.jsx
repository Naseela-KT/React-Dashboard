/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({toggleSidebar,isSidebarOpen}) => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        Metrix
      </Link>
      <button
        className="navbar-toggler d-md-block d-lg-none"
        type="button"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  </header>
  )
}

export default Navbar