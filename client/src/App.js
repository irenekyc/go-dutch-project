import React, {Fragment} from 'react';
import Navbar from './layout/Navbar'
import Landing from './layout/Landing'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

import Collections  from './components/Collections/Collections'
import Collection from './components/Collections/Collection'
import CollectionForm from './components/Collections/Add-Collections/CollectionForm'

import Dashboard from './components/Profile/Dashboard'
import ProfileForm from './components/Profile/ProfileForm'



import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        
          <section className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/collections" component={Collections} />
              <Route path="/collections/:id" component={Collection} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/edit-profile" component={ProfileForm} />
              <Route exact path="/add-collections" component={CollectionForm} />
            </Switch>
          </section>
        
      </Fragment>
    </Router>
  )}

export default App;
