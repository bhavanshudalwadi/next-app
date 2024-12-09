"use client"
import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../functions';

const ProductListClientSide = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        async function getData() {
            let productList: any = await fetchProducts();
            setProducts(productList);
        }
        getData();
    }, [])

    return (
        <div>
            {products.length > 0 && products.map((p, i) =>
                <div className="card m-2">
                    <div className="card-body">
                        <h6>Name: {p.title}</h6>
                        <h5>Price: {p.price}</h5>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductListClientSide