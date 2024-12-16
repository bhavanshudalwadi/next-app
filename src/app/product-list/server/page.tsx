import React from 'react'
import { fetchProducts } from '../functions';
// Importing outside component
import CustomButton from '@/components/custom-button';
// Importing inner style
import inner from './server.module.css';
// Importing outside style
import outer from '@/styles/outside.module.css';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

const googleFont: NextFont = Lato({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
});

const ProductListServerSide = async () => {
    const products: any[] = await fetchProducts();
    
    const { red, blue, green } = inner

    return (
        <div>
            {products.length > 0 && products.map((p) =>
                <div className="card m-2" key={p.id}>
                    <div className="card-body row">
                        <div className="col-4">
                            {/* <img src={p.thumbnail} alt="Product Image" /> */}
                            <Image src={p.thumbnail} alt="Product Image" width={300} height={300} />
                        </div>
                        <div className="col-8">
                            <h6 className='main'>{p.title}</h6>
                            <p className={inner.main}>Description: {p.description}</p>
                            <h5 className={outer.main}>Price: {p.price}</h5>
                            <h6 className={red}>Brand: {p.brand}</h6>
                            <h6 className={blue}>Category: {p.category}</h6>
                            <h6 className={green}>Ratings: {p.rating}</h6>
                            <h6 id={inner.sample}>Return Policy: {p.returnPolicy}</h6>
                            <h6 className={googleFont.className}>Font Example</h6>
                            <CustomButton item={p} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export function generateMetadata(){
    return {
        title: "Product List Page",
        description: "List of products with image, name, description, brand, category, rating, etc"
    }
}

export default ProductListServerSide