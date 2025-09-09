// /blog oppure /blog/1/2/3/4

interface PagePros {
    params: {
        slug?: string[];
    };
}

// Tecnica rotte Catch-All Opzionali
export default function ProductPage({ params }: PagePros) {
    
        const {slug} = params;  
        const path = slug?.join('/') || '/';
      return (
        <div>
        <ul className="space-y-4">
            <li className="p-4 border rounded-lg hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-bold text-blue-600">Introduzione a Next.js</h4>
            <p className="text-gray-600">Scopri le basi di Next.js e come iniziare a costruire applicazioni web moderne.</p>
            <p>Percorso pagin /{path}</p>
            </li>        
        </ul>
        </div>
    );
}