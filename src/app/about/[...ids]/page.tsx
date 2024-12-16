// import { Params } from 'next/dist/server/request/params'
import React from 'react'

const AboutIDs = async ({ params }: { params: Promise<{ ids: string[] }> }) => {
    const { ids } = await params;
    
    return (
        <div>AboutIDs: { JSON.stringify(ids) }</div>
    )
}

export default AboutIDs