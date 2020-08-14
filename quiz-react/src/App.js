import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import OrderList from './OrderList';
import AddProduct from './AddProduct';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <header>
              <Link className="headerLink" to='/' >商城</Link>
              <Link className="headerLink" to='/orderlist' >订单</Link>
              <Link className="headerLink" to='/addproduct' >添加商品</Link>
           </header>
            <main>
              <Switch>
                <Route path='/orderlist' component={OrderList}></Route>
                <Route path='/addproduct' component={AddProduct}></Route>
                <Route path='/' component={Home}></Route>
              </Switch>
            </main>
          </BrowserRouter>
          
      </div>
    );
  }
}

export default App;
