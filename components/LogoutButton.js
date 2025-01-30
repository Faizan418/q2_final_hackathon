"use client";  // 👈 Yeh line add karo

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("authToken"); // Remove token
        router.push("/login"); // Redirect to login
    };

    return (
        <button onClick={handleLogout} style={{ padding: "10px", marginTop: "20px", cursor: "pointer" }}>
            Logout
        </button>
    );
}
