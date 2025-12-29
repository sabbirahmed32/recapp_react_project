import React from 'react';

function Singleproduct({ product }) {
  const { image, title, category, price, rating, description } = product;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-contain mb-4"
      />

      <h5 className="text-lg font-semibold mb-1 line-clamp-1">
        {title}
      </h5>

      <p className="text-sm text-gray-500 mb-1">
        {category}
      </p>

      <p className="text-md font-bold text-green-600 mb-1">
        ${price}
      </p>

      <p className="text-sm text-yellow-500 mb-2">
        ⭐ {rating?.rate} ({rating?.count})
      </p>

      <p className="text-sm text-gray-600 line-clamp-2">
        {description}
      </p>
    </div>
  );
}

export default Singleproduct;
