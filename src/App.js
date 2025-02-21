import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dashboard from './componenets/Dashboard';

import LoginForm from './componenets/LoginForm';

function App() {

    const[loggin, setLoggin] = useState(false);
    

  
  
  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
     <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
          {loggin ? (
            <Dashboard setLoggin={setLoggin} />
          ) : (
            <LoginForm setLoggin={setLoggin} />
          )}
        </div>
      
    </div>
  );
}

export default App;
