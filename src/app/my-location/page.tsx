"use client"
import Script from 'next/script'
import React from 'react'

const MyLocation = () => {
    const getGeoLocation = () => {
        console.log("File Loaded");
    }

    return (
        <>
            <Script
                src='/geo-location.js'
                onLoad={getGeoLocation}
            />
            <h2>Cordinates are: <span className='my-location'></span></h2>
        </>
    )
}

export default MyLocation