import { useState, useEffect, useContext } from "react";
import './Products.css';
import Api from "../Api-Mercado-Livre/api";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import appContext from "../../Context/appContext";

function Products() {
    const {products, setProducts, load, setLoad} = useContext(appContext);
    

    useEffect(() => {
        Api('iphone').then((response) => {
            setProducts(response);
            setLoad(false);
        });
    }, [setProducts]);

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