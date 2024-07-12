import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { addToCart } from '../React-Redux/reduxAction';
import { FaStar } from 'react-icons/fa'; // Example review star icon

const ProductModal = ({ product, onClose, addToCart }) => {
  const modalRef = useRef(null);

  const handleModalClose = () => {
    onClose();
  };

  const handleAddToCart = () => {
    const totalPrice = parseFloat(product.price.replace('$', '')) * product.quantity;
    const productWithPrice = { ...product, totalPrice };
    addToCart(productWithPrice);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-white p-8 rounded-lg max-w-md md:w-full w-96">
        <button className="absolute top-0 right-0 -mt-6 -mr-6 text-gray-800" onClick={handleModalClose}>
          <AiOutlineClose className="h-6 w-6" />
        </button>
        <div className="text-center">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="mx-auto h-72 w-72 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600 mt-2">{product.color}</p>
          {product.price ? (
            <p className="text-gray-700 mt-2">{product.price}</p>
          ) : (
            <p className="text-red-500 mt-2">Price not available</p>
          )}

          {/* Product reviews section */}
          <div className="flex items-center justify-center mt-4">
            <FaStar className="text-yellow-500  h-5 w-5 mr-1" />
            <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
            <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
            <FaStar className="text-yellow-500 h-5 w-5 mr-1" />
            <FaStar className="text-yellow-500 h-5 w-5" />
            <span className="text-gray-600 ml-2">(25 reviews)</span>
          </div>

          {/* Additional information */}
          <div className="mt-4 text-sm text-gray-600">
            <p>Free delivery within 2-3 business days.</p>
            <p>Reach you by {new Date().toLocaleDateString()}.</p>
          </div>
        </div>

        {/* Add to cart button */}
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full" onClick={handleAddToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(ProductModal);
