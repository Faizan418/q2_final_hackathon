import { client } from '@/sanity/lib/client'
import Image from 'next/image';
import React from 'react';

const Data = async () => {
    const query = await client.fetch(
        `*[_type == "product"]{
          name,
          description,
          "imageUrl": image.asset->url,
          price
        }`
    );

    console.log(query);

    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {query.map((product: any) => (
                <div key={product.name} className="border border-gray-300 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
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
