"use client"
import React from 'react'

const CustomButton = ({ item }: any) => {
    const addToCart = () => {
        alert(`${item.title} Added to Cart.`)
        console.log(item);
    }

    return (
        <>
            <button className='btn btn-primary' onClick={addToCart}>Add to cart</button>
        </>
    )
}

export default CustomButton