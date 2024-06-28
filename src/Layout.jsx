import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div className="navBar">
          <Link className="navBarItem" to="/">Account</Link>
          <Link className="navBarItem" to="/Home">Houses</Link>
        </div>

      <Outlet />
    </div>
  )
};