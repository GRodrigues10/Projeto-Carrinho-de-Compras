import { useState, useEffect } from "react";
import './Products.css';
import Api from "../Api-Mercado-Livre/api";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

function Products() {
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        Api('iphone').then((response) => {
            setProducts(response);
            setLoad(false);
        });
    }, []);

    return (
        <>
            {load ? (
                <Loading />
            ) : (
                <section className="products container">
                    {products.map((product) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </section>
            )}
        </>
    );
}

export default Products;