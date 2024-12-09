'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h2>Hello</h2>
      <button onClick={() => alert("Hello")} className="btn btn-primary mb-3">Click Me</button> 
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/about/5f92cbf10cf217478ba93561">Go to About ID</Link>
      <br />
      {/* For Hooks we need to write "use client" */}
      <button onClick={() => router.push("/about")} className="btn btn-primary mt-3">Go to About</button>
    </div>
  );
}
