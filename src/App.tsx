import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Programs from './components/Programs';

function App() {
  return (
    <div className="min-h-screen font-primary bg-[#fcfaf5]">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
    </div>
  );
}

export default App;
