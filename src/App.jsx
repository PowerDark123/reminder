import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import {pers} from './data'
import {List} from './components/List'

function App() {
  const [people,setPeople]= useState(pers)
  return (
    
    <div className="container border text-center">
      <h1>Today birthdays</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
