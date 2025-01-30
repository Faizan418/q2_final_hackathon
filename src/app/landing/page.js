'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundImage: "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fcode.market%2Fproduct%2Fhekto-ecommerce-xd-template&psig=AOvVaw0K8qxywv_W-O0Zt5-HOsjS&ust=1738360820469000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND97vC4nosDFQAAAAAdAAAAABAE')",
            background: "lightpink",
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontFamily: "Arial, sans-serif",
            color: "white",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)" // Added text shadow for better readability
        }}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px", padding: "20px" }}>
                Welcome to Hekto
            </h1>
            <p style={{
                fontSize: "1.2rem", 
                maxWidth: "600px", 
                textAlign: "center", 
                marginBottom: "30px",
                fontWeight: "lighter",
                padding: "20px"
            }}>
                Discover the Best Furniture for Your Home. High-quality furniture with the best deals. Transform your space with elegance.
            </p>
            <Link href="/login"
                style={{
                    padding: "12px 24px",
                    background: isHovered ? "#0056b3" : "#007bff",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontSize: "1.2rem",
                    marginTop: "20px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background 0.3s ease",
                    cursor: "pointer"
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Login to Continue
            </Link>
        </div>
    );
}
