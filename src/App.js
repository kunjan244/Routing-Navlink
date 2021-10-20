import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Felix from './component/Felix';
import Home from './component/Home';
import Info from './component/Info';
import Menu from './Menu';
import User from './component/User';
import Demo from './component/Demo';
import  Function from './component/Function';
import Service from './component/Service';
import Product from './component/Product';



function App() {
  return (
    <>
<Menu />

<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/about' component={About} />
  <Route exact path='/contact' component={Contact} />
  <Route exact path='/demo' component={Demo} />
  <Route exact path='/user' component={User} />
  <Route exact path='/info' component={Info} />
  <Route exact path='/felix' component={Felix} />
  <Route exact path='/Function' component={Function} />
  <Route exact path='/Service' component={Service} />
  <Route exact path='/Product' component={Product} />

</Switch>


     
      </>   
  );
}

export default App;
