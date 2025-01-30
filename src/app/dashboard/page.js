"use client";  // Next.js app router me yeh zaroori hai

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Change: 'next/router' to 'next/navigation'
import LogoutButton from "../../../components/LogoutButton"; // Correct relative path

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login"); // Redirect to login page
        }
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Welcome to Dashboard</h1>
            <LogoutButton />
        </div>
    );
}
