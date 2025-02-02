import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();

    const handleLogin = () => {
        // Dummy token save karna
        localStorage.setItem("faizan", "12345");
        router.push("/dashboard"); // Redirect to dashboard
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
