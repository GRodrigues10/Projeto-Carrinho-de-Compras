import { useState, useEffect } from "react";
import './Products.css';
import Api from "../Api-Mercado-Livre/api";
import ProductCard from "../ProductCard/ProductCard";
function Products(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
       Api('iphone').then((response)=>setProducts(response));
    },[])

    

    return(<>
            
                
                <section className="products container">
                    {products.map((product)=> <ProductCard key={product.id} data={product}></ProductCard >)}
                </section>


           </>)
}

export default Products