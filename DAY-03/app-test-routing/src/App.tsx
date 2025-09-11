// App.tsx
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="p-4">
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <hr className="my-4" />

      {/* Qui React Router renderizza i figli */}
      <Outlet />
    </div>
  );
}
