import React, {useState} from 'react'
import TopMenu from "./components/header/TopMenu";
import Search from "./components/searchPanel/Search";
import ProductMenu from "./components/ProductMenu/ProductMenu";

import {Context} from "./components/context";



function App() {

    const [counter, setCounter] = useState(0)
    const countUp = () => setCounter(counter + 1)
    const countDown = () => setCounter(counter - 1)

    const value = {
        counter,
        countUp,
        countDown
    }

  return (
    <div className="App">
        <Context.Provider value={value}>
                <TopMenu/>
                <Search/>
                <ProductMenu/>
        </Context.Provider>
    </div>
  );
}

export default App;
