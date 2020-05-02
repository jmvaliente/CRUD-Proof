import React, {Fragment} from 'react';
import Header from './components/Header'
import Products from './components/Products'
import ProductCreate from './components/ProductCreate'
import ProductEdit from './components/ProductEdit'

import {Route, Switch} from 'react-router-dom'

import ProductState from './context/products/productState'

function App() {
  return (
    <Fragment>
      <ProductState>
      <Header/>
      <Switch>
        <Route exact path = "/" component = {Products}/>
        <Route exact path = "/product/create" component = {ProductCreate}/>
        <Route exact path = "/product/edit/:id" component = {ProductEdit}/>
      </Switch>
      </ProductState>
    </Fragment>
  );
}

export default App;
