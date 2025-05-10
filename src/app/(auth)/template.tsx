"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name : "Register", href: "/register"},
    { name : "Login", href: "/login"},
    { name : "Forgot password" , href: "/forgot-password"}
]

export default function AuthLayout ({ 
    children,
}: {
    children : React.ReactNode;
}) {
    const pathname = usePathname();
    const [input, setInput] = useState("");
    
    return (
        <div>
            <div>
                <input value={input} onChange={e => setInput(e.target.value)}></input>
            </div>
            {navLinks.map((links) =>{
                const isActive = pathname.startsWith(links.href)
                return (
                    <Link href={links.href} key={links.name}
                        className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {links.name}
                    </Link>
                )
            })}
        </div>
    )

}