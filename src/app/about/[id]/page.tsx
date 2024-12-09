import { Params } from 'next/dist/server/request/params'
import React from 'react'

const AboutDetails = async ({ params }: { params: Params }) => {
    return (
        <div>
            <h3>About { params.id }</h3>
        </div>
    )
}

export default AboutDetails