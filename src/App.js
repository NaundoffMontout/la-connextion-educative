import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue à l'application de prise de rendez-vous pour tutorat</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App);

