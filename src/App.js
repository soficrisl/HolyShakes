import logo from './logo.svg';
import './index.css';
import './App.css';
import PrimerComponente from './logincomponents/PrimerComponente';
import Header from './logincomponents/Header';
import Mainlogin from './logincomponents/Mainlogin';
import Footer from './logincomponents/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-white to-blue-100 dark:from-zinc-800 dark:to-zinc-900">
    < Header/>
    < Mainlogin/>
    < Footer/>
  
  </div>
  );
}

export default App;
