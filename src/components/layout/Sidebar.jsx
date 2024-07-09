/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Sidebar = ({isSidebarOpen,toggleSidebar}) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="btn btn-light mb-4 close-btn d-md-none" onClick={toggleSidebar}>
          {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <h4 className="font-weight-bold mb-4">Event Castle</h4>
        <nav className="nav flex-column">
          <Link to="" className="nav-link">
            Dashboard
          </Link>
          <Link to="" className="nav-link">
            Users
          </Link>
          <Link to="" className="nav-link">
            Vendors
          </Link>
          <hr />
          <button className="btn btn-danger mt-4">Logout</button>
        </nav>
      </aside>
  )
}

export default Sidebar