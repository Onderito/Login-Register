import React, { useState } from 'react';
import Login from '../login';
import Register from '../register';

import './App.scss';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === 'login' ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
