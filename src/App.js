import TopMenu from "./components/header/TopMenu";
import Search from "./components/searchPanel/Search";
import ProductMenu from "./components/ProductMenu/ProductMenu";
function App() {
  return (
    <div className="App">

        <TopMenu/>
        <Search/>
        <ProductMenu/>
    </div>
  );
}

export default App;
