import React, {Fragment} from 'react';
import Header from './components/Header'
import Products from './components/Products'
import ProductCreate from './components/ProductCreate'
import ProductEdit from './components/ProductEdit'

import Login from './components/auth/Login'

import {Route, Switch, useHistory} from 'react-router-dom'

import ProductState from './context/products/productState'

function App() {
  
  const history = useHistory()
  const headHide = history.location.pathname
  
  return (
    <Fragment>
      <ProductState>
        {headHide==='/login' ? null :<Header/>}
      <Switch>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/" component = {Products}/>
        <Route exact path = "/product/create" component = {ProductCreate}/>
        <Route exact path = "/product/edit/:id" component = {ProductEdit}/>
      </Switch>
      </ProductState>
    </Fragment>
  );
}

export default App;
