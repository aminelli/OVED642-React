export default function BlogPage() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Articoli Recenti</h3>
      <ul className="space-y-4">
        <li className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <h4 className="text-lg font-bold text-blue-600">Introduzione a Next.js</h4>
          <p className="text-gray-600">Scopri le basi di Next.js e come iniziare a costruire applicazioni web moderne.</p>
        </li>
        <li className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
          <h4 className="text-lg font-bold text-blue-600">Routing Avanzato in Next.js</h4>
          <p className="text-gray-600">Esplora le funzionalità di routing avanzato offerte da Next.js per migliorare la navigazione della tua app.</p>
        </li>
    </ul>
    </div>
  );
}