import React from 'react';
import { connect } from 'react-redux';

const Checkout = ({ cartItems, totalPrice }) => {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 7);

  return (
    <div className="h-screen w-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-semibold text-gray-900">Checkout</h1>
        </div>
        <div className="mx-auto mt-8 max-w-2xl md:mt-12">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:px-10 sm:py-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              <ul className="-my-8 divide-y divide-gray-200">
                {cartItems.map((product, index) => (
                  <li key={`${product.id}-${index}`} className="py-6 flex">
                    <div className="flex-shrink-0">
                      <img src={product.imageSrc} alt={product.imageAlt} className="h-24 w-24 rounded-lg object-cover" />
                    </div>
                    <div className="ml-6 flex-1 flex flex-col justify-between">
                      <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                          <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 flex items-center">
                          <p className="text-xl font-semibold text-gray-900">{product.price || 'Price not available'}</p>
                          <p className="ml-4 text-sm text-gray-500">Quantity: {product.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="text-lg font-semibold text-gray-900">Total: ${totalPrice}</p>
                <p className="text-lg font-semibold text-gray-900">Delivery Date: {deliveryDate.toDateString()}</p>
                <button className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.items,
  totalPrice: state.cart.items.reduce((total, product) => {
    const itemPrice = product.price ? parseFloat(product.price.replace('$', '')) * product.quantity : 0;
    return total + itemPrice;
  }, 0).toFixed(2),
});

export default connect(mapStateToProps)(Checkout);
