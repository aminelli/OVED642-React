// pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>❌ Pagina non trovata</h1>
      <Link to="/">Torna alla Home</Link>
    </div>
  );
}
