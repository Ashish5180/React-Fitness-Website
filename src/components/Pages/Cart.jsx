import React, { useEffect } from 'react'; // Import React and useEffect hook
import { connect } from 'react-redux'; // Import connect function from react-redux
import { removeFromCart } from '../React-Redux/reduxAction'; // Import removeFromCart action creator
import { Link } from 'react-router-dom';
// Import the updated store with rootReducer
import store from '../React-Redux/store'; // Import the Redux store

// Cart component
const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  // Load cart items from local storage on component mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems'); // Retrieve cart items from local storage
    if (storedCartItems) {
      const parsedCartItems = JSON.parse(storedCartItems); // Parse the stored cart items
      store.dispatch({ type: 'LOAD_CART_ITEMS', payload: parsedCartItems }); // Dispatch action to load cart items into Redux store
    }
  }, []);

  // Update local storage whenever cart items change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Update local storage with cart items
  }, [cartItems]);

  // Function to calculate total price of items in the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, product) => {
      const itemPrice = product.price ? parseFloat(product.price.replace('$', '')) * product.quantity : 0; // Calculate price of each item
      return total + itemPrice; // Accumulate total price
    }, 0).toFixed(2); // Return total price with 2 decimal places
  };

  // Render the cart component
  return (
    <div className="h-screen w-screen bg-gray-100 py-12 sm:py-16 lg:py-20">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center">
      <h1 className="text-6xl font-semibold text-gray-900">Your Cart</h1>
    </div>
    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
      <div className="bg-white shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">
              {cartItems.map((product, index) => (
                <li key={`${product.id}-${index}`} className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                  <div className="shrink-0">
                    <img src={product.imageSrc} alt={product.imageAlt} className="h-24 w-24 max-w-full rounded-lg object-cover" />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between">
                    <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                      <div className="pr-8 sm:pr-5">
                        <p className="text-base font-semibold text-gray-900">{product.name}</p>
                        <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{product.size}</p>
                      </div>
                      <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                        <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">{product.price || 'Price not available'}</p>
                        <div className="sm:order-1">
                          <div className="mx-auto flex h-8 items-stretch text-gray-600">
                            <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
                            <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">{product.quantity}</div>
                            <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                      <button type="button" className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900" onClick={() => removeFromCart(product.id)}>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${calculateTotalPrice()}</p>
            <button className="bg-green-500 text-white px-4 py-2 mt-2 rounded"><Link to='/Checkout'>Checkout</Link></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

// Map state to props
const mapStateToProps = (state) => ({
  cartItems: state.cart.items, // Retrieve cart items from Redux store
});

// Map dispatch to props
const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (productId) => dispatch(removeFromCart(productId)), // Dispatch action to remove item from cart
  updateQuantity: (productId, newQuantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, newQuantity } }), // Dispatch action to update quantity of an item in cart
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart); // Connect component to Redux store
