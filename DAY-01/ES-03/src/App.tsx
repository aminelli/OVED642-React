import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarMenu from './components/SidebarMenu';

const App: React.FC = () => {
  
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header title="Ciao" />
        <Header title="Secondo Header" />

        <div className="flex flex-1">
          <SidebarMenu />
          <main className="flex-1 p-6 bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Welcome to My App</h2>
            <p>
              Ciao mondo
            </p>
          </main> 

        </div>

      <Footer />

      </div>
    </>
  )
}

export default App
