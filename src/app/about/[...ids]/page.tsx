"use client";

import { Params } from 'next/dist/server/request/params'
import React from 'react'

const AboutIDs = ({ params }: { params: Params }) => {
    return (
        <div>AboutIDs: { JSON.stringify(params.ids) }</div>
    )
}

export default AboutIDs