
import { Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/home';

function App() {

  return (
    <>
    <div className="bg-gray-950 w-full h-screen">
      <p className="text-white">This is a practice React Router Project with in depth Router Usage</p>
      <Home/>
    </div>
    <Outlet/>
    
        
    </>
  )
}

export default App
