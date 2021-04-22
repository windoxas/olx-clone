import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FreeProduct from "./ProductMenu/components/freeProduct/FreeProduct";
import ProductExchange from "./ProductMenu/components/Exchange/ProductExchange";
import HeaderMenu from "./ProductMenu/components/HeaderMenuItem";


const Routers = () => {
    return(
        <Switch>
            <Route path={"/"} component={HeaderMenu}  exact/>
            <Route path={'/free-product'} component={FreeProduct} exact />
            <Route path={'/exchange'} component={ProductExchange} exact />
        </Switch>
    )
}

export default Routers