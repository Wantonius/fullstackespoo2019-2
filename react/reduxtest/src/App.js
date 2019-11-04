import React from 'react';
import logo from './logo.svg';
import ShoppingForm from './components/ShoppingForm'
import ShoppingList from './components/ShoppingList'
import './App.css';

function App() {
  return (
    <div className="App">
		<ShoppingForm/>
		<hr/>
		<ShoppingList/>
    </div>
  );
}

export default App;
