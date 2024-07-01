import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="navBar">
        <div className="left">
          <Link className="navBarItem" to="/">Account</Link>
          <Link className="navBarItem" to="/Home">Houses</Link>
        </div>
        <div className="right">
          <Link className="addButton" to="/add">Add</Link>
        </div>
      </div>

      <Outlet />
    </div>
  )
};