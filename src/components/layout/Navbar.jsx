/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiBell } from "react-icons/fi";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="navbar navbar-expand-lg navbar-white bg-white fixed-top">
      <div className="container-fluid">
        <div className="navbar-left">
          <img src="/imgs/logo.png" width={45} height={45} alt="logo" />
          <Link className="navbar-brand" to="/">
            Metrix
          </Link>
          <h6 className="dashboard-title sm-hidden">Dashboard</h6>
          <button
            className="navbar-toggler d-md-block d-lg-none"
            type="button"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="navbar-right">
          <div className="dropdown">
            <select className="form-select-s custom-select" value={status}>
              <option value="Completed">Nanny&apos;s Shop</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <FiBell size={24} className="notification-icon" />
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            width={25}
            height={25}
            alt="profile"
            className="profile-image"
          />
           </div>
         
       
      </div>
    </header>
  );
};

export default Navbar;
