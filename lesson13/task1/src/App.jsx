import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import PageNotFound from './PageNotFound.jsx';
import Home from './Home.jsx';

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
