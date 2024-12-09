'use client'

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>
        <span>Hello</span>
        <button onClick={() => alert("Hello")} className="btn btn-primary btn-sm ms-2">Click Me</button> 
      </h2>
      <div>
        <h2 className="d-inline">fetch API</h2>
        <Link href="/product-list/client" className="ms-2">Product List ("use client")</Link>
        <Link href="/product-list/server" className="ms-2">Product List ("use server")</Link>
      </div>
    </div>
  );
}
