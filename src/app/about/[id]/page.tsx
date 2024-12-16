// import { Params } from 'next/dist/server/request/params'
import React from 'react'

const AboutDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    
    return (
        <div>
            <h3>About { id }</h3>
        </div>
    )
}

export default AboutDetails