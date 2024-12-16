"use client"
import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../functions';

const ProductListClientSide = () => {
    const [products, setProducts] = useState<any[]>([]); /* eslint-disable  @typescript-eslint/no-explicit-any */

    useEffect(() => {
        async function getData() {
            const productList: any = await fetchProducts(); /* eslint-disable  @typescript-eslint/no-explicit-any */
            setProducts(productList);
        }
        getData();
    }, [])

    return (
        <div>
            {products.length > 0 && products.map((p) =>
                <div className="card m-2" key={p.id}>
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