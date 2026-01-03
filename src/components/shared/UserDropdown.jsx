import { Link } from "react-router";

const UserDropdown = ({ user, onLogout }) => {
  return (
    <div className="dropdown dropdown-end">
      <button
        tabIndex="1"
        role="button"
        className="btn btn-ghost btn-circle avatar border-3 border-transparent hover:border-accent transition-colors duration-500 ease-in-out"
      >
        <div className="w-10 rounded-full">
          <img src={user.photoURL} alt="profile" />
        </div>
      </button>
      <ul
        tabIndex="1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-4 w-52 p-2 shadow-md gap-2"
      >
        <Link to="/dashboard" className="btn btn-sm btn-accent">
          Dashboard
        </Link>
        <Link to="/dashboard/profile" className="btn btn-sm btn-accent">
          Profile
        </Link>
        <button className="btn btn-error btn-sm" onClick={onLogout}>
          Logout
        </button>
      </ul>
    </div>
  );
};

export default UserDropdown;
