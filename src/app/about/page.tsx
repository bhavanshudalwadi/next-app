'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const About = () => {
    const router = useRouter();

    return (
        <div>
            <h2>About</h2>
            <Link href="/about/owner">About Website Owner</Link>
            <br />
            <button className="btn btn-primary mt-3" onClick={() => router.push("/about/owner")}>About Website Owner</button>
        </div>
    )
}

export default About