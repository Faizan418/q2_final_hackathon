'use client'; // Required for React hooks in a server component

import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

// Define the type for product
interface Product {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
}

const Data = () => {
    const [products, setProducts] = useState<Product[]>([]); // State to store products
    const [error, setError] = useState<string | null>(null); // State to handle errors

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const query: Product[] = await client.fetch(
                    `*[_type == "product"]{
                      name,
                      description,
                      "imageUrl": image.asset->url,
                      price
                    }`
                );
                setProducts(query); // Set fetched data to state
            } catch (err) {
                setError('Failed to fetch products'); // Handle fetch error
                console.error(err);
            }
        };

        fetchProducts(); // Call the fetch function
    }, []);

    if (error) {
        return <p className="text-red-500 text-center">{error}</p>; // Show error message
    }

    if (products.length === 0) {
        return <p className="text-center text-gray-600">Loading products...</p>; // Loading state
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {products.map((product) => (
                <div
                    key={product.name}
                    className="border border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        height={150}
                        width={150}
                        className="rounded-md mx-auto"
                    />
                    <h2 className="text-lg font-semibold text-center mt-4">{product.name}</h2>
                    <p className="text-gray-600 text-sm mt-2 text-center">{product.description}</p>
                    <p className="text-green-600 font-bold text-center mt-2">Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Data;
