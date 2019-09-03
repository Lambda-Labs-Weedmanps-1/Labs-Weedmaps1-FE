import React from "react"
import {Route} from "react-router-dom";
//Routes
import Profile from "./components/profile/show";
import Navigation from './components/Navigation/Navigation'
import BusinessListVew from './views/BusinessListView'
import Review from "./components/Reviews"
import BusinessCreator from './components/Business/BusinessCreator'
import CustomerCreator from './components/Customers/CustomerCreator'
import Auth0 from './components/Auth0';
import MenuCreator from './components/Menu/MenuCreator'
import AddCustomer from "./components/Customer/Add";
import CustomerList from "./components/customerviews/CustomerList";

export default () =>{
  return <>
        <Route path="/login" exact component={Auth0}/>
        <Route path={"/"} component={Navigation}/>
        <Route path={"/profile"} component={Profile}/>
        {/*<Route path={"/profile"} component={Profile}/>*/}
        {/* Business */}
        <Route path={"/business/view"} component={BusinessListVew} />
        <Route path={"/business/reviews"} component={Review} />
        <Route path="/business/create" exact component={BusinessCreator}/>
        {/* Customer */}
        <Route path={"/profile/new/customer"} component={AddCustomer}/>
        <Route path="/customer/create" exact component={CustomerCreator}/>
        <Route path="/customer/listview" exact component={CustomerList}/>
        {/* Menu */}
        <Route path="/menu/new" exact component={MenuCreator} />
      </>
}