"use client"; 
import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("authToken"); 
        router.push("/login"); 
    };

    return (
        <button onClick={handleLogout} style={{ padding: "10px", marginTop: "20px", cursor: "pointer" }}>
            Logout
        </button>
    );
}
