import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';

function App() {
  return (
    <div className="min-h-screen font-primary bg-[#fcfaf5]">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default App;
