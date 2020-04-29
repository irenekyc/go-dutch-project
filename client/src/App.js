import React, {Fragment} from 'react';
import Navbar from './layout/Navbar'
import Landing from './layout/Landing'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Logout from './components/Logout'

import Collections  from './components/Collections/Collections'
import Collection from './components/Collections/Collection'
import CollectionForm from './components/Collections/Add-Collections/CollectionForm'
import Alert from './components/Alert'

import Dashboard from './components/Profile/Dashboard'
import ProfileForm from './components/Profile/ProfileForm'

import { Provider } from 'react-redux'
import store from './store'


function App() {
 
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
      
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
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
    </Provider>
  )}

export default App;
