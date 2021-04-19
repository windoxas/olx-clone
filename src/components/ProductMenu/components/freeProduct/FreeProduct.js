import React,{useState, useEffect} from 'react'
import ProductList from "../ProductList";


const FreeProduct = () => {
    const [freeProduct, setFreeProduct] = useState([])



    useEffect(() => {
        fetch(" http://localhost:3004/FREE")
            .then(response => response.json())
            .then(data => setFreeProduct(data))

    }, [setFreeProduct])


    return(
        <div>
            {freeProduct.map(product => {
                return <ProductList img={product.img} name={product.name} location={product.location} data={product.data} />
            })}
        </div>
    )
}

export default FreeProduct