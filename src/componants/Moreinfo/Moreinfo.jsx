import React, { useEffect, useState } from 'react'
import { useLoaderData, Link } from 'react-router-dom'

function Moreinfo() {
  const moreInfo = useLoaderData()
  const { image, title, price, rating, description, category, id } = moreInfo || {}

  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(
          item => item.category === category && item.id !== id
        )
        setRelatedProducts(filtered)
      })
  }, [category, id])

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16">

        {/* Left Image */}
        <div className="md:w-1/3 w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded-lg shadow"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 w-full space-y-4 mt-16">
          <h5 className="text-2xl font-semibold">{title}</h5>

          <h6 className="text-xl text-green-600 font-bold">
            Price: ${price}
          </h6>

          <h5 className="text-lg">
            Rating: {rating?.rate ?? rating}
          </h5>

          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h3 className="text-2xl font-semibold mb-6">Related Products</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h5 className="text-sm font-medium line-clamp-2">
                {product.title}
              </h5>
              <p className="text-green-600 font-semibold mt-2">
                ${product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Moreinfo
