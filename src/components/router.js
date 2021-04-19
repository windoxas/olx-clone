import React from 'react'
import {Switch, Route} from 'react-router-dom'
import FreeProduct from "./ProductMenu/components/freeProduct/FreeProduct";


const Routers = () => {
    return(
        <Switch>
            <Route path={'/free-product'} component={FreeProduct} exact />
        </Switch>
    )
}

export default Routers