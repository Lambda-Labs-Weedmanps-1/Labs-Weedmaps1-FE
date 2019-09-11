import React from "react";
import { Route } from "react-router-dom";
//Routes
import BusinessCreator from "./components/Business/BusinessCreator";
import ScheduleCreator from "./components/Business/ScheduleCreator";
import CustomerCreator from "./components/Customers/CustomerCreator";
import Auth0 from "./components/Auth0";
import MenuCreator from "./components/Menu/MenuCreator";
import EditReviewPresentation from "./components/Reviews/edit";
import BusinessSingleView from "./components/Business/BusinessSingleView";
import AddCustomer from "./components/Customer/Add";
import CustomerView from "./components/customerviews/CustomerView";
import InitLandingPage from "./components/InitLandingPage";
import BusinessUpdater from "./components/Business/BusinessUpdater";
import Map from "./components/googleMap/Map";

import CustomerCart from './components/customerviews/CustomerCart';
import BusinessOrderFrom from './components/Business/BusinessOrderFrom';

export default () => {
  return (
    <>
      {/* Special Auth0 Route  */}
      <Route path={"/login"} exact component={Auth0} />

      {/* Business */}
      <Route path={"/businesses/create"} exact component={BusinessCreator} />
      <Route path={"/business/:id"} exact component={BusinessSingleView} />
      <Route path={"/business/:id/order"} exact component={BusinessOrderFrom} />
      <Route path={"/business/update/:id"} exact component={BusinessUpdater} />
      <Route path={"/review/:id"} exact component={EditReviewPresentation} />
      
      {/* Customer */}
      <Route path={"/register/customer"} component={AddCustomer} />
      <Route path={"/customer/create"} exact component={CustomerCreator} />{" "}
      {/* have a single way of creating customer */}
      <Route path={"/customer/view"} exact component={CustomerView} />{" "}
      <Route path={"/customer/cart"} exact component={CustomerCart} />
      {/* will break unless you have a customer_id */}

      {/* Menu */}
      <Route path={"/menu/new"} exact component={MenuCreator} />
      <Route path={"/schedule/create"} exact component={ScheduleCreator} />

      {/* registration */}
      <Route path={"/registration"} exact component={InitLandingPage} />

      {/* Main Page */}
      <Route exact path={"/"} component={Map} />
      <Route exact path={"/home"} component={Map} />
    </>
  );
};
