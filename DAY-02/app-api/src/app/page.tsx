
export default function HomePage() {
  return (
    <>
      <div>
        <h1>Welcome to Demo Api</h1>
        <p> Uso di api, server action, fetch, streaming</p>

        <div className="grid">

          <div className="card">
            <h3>Test</h3>
            <ul>
              <li>server action</li>
              <li>fetch</li>
              <li>streaming</li>
            </ul>
          </div>

          <div className="card">
            <h3>Pagine</h3>
            <ul>
              <li>streaming: caricamento dati</li>
            </ul>
          </div>

        </div>

      </div>
    
    </>
    );
}
