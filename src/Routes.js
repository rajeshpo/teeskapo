import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/Cart";
import Corona from "./core/Corona";
import UpdateCategory from "./admin/UpdateCategory";
import ManageOrders from "./admin/ManageOrders";
import TodayOrders from "./admin/TodayOrders";
 import privacy from './policy.js'
 
import Rotis from "./core/categoryHelpers/Rotis";
import Biryani from './core/categoryHelpers/Biryani'
import CoolDrinks from './core/categoryHelpers/CoolDrinks'
import FastFood from './core/categoryHelpers/FastFood'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/cart" exact component={Cart} />  
        <Route path="/corona-tracker" exact component={Corona} />  
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        
        <PrivateRoute path="/user/rotisandcurries" exact component={Rotis} />
        <PrivateRoute path="/user/biryaniitems" exact component={Biryani} />
        <PrivateRoute path="/user/cooldrinks" exact component={CoolDrinks} />
        <PrivateRoute path="/user/fastfooditems" exact component={FastFood} />
        <PrivateRoute path="/privacypolicy" exact component={privacy} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/orders" exact component={ManageOrders} />
        <AdminRoute path="/admin/todayorders" exact component={TodayOrders} />
        <AdminRoute
          path="/admin/create/category"
          exact
          component={AddCategory}
        />
        <AdminRoute
          path="/admin/categories"
          exact
          component={ManageCategories}
        />
        <AdminRoute path="/admin/create/product" exact component={AddProduct} />

        <AdminRoute path="/admin/products" exact component={ManageProducts} />
        <AdminRoute
          path="/admin/product/update/:productId"
          exact
          component={UpdateProduct}
        />
            <AdminRoute path="/admin/category/:categoryId/:userId" exact component={UpdateCategory}/>
           

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
