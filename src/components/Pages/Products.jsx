import React, { useState } from 'react'; // Import React and useState hook
import ProductModal from './ProductModal'; // Import ProductModal component
import { connect } from 'react-redux'; // Import connect function from react-redux
import { addToCart } from '../React-Redux/reduxAction'; // Import addToCart action creator

const products1 = [
  {
    id: 1,
    name: 'MuscleBlaze Biozyme Whey Protein',
    href: '#',
    imageSrc: 'https://img5.hkrtcdn.com/26625/prd_2662414-MuscleBlaze-Biozyme-Whey-Protein-4.4-lb-Kesar-Kulfi_o.jpg',
    imageAlt: "MuscleBlaze Biozyme Whey Protein",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Fitbit Charge 4 Fitness and Activity Tracker',
    href: '#',
    imageSrc: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SL1500_.jpg',
    imageAlt: "Fitbit Charge 4 Fitness and Activity Tracker",
    price: '$129',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Resistance Bands Set',
    href: '#',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWTCsYiJZD-NZbu7ZvgkZO3dyasJg4SJ5nX4Z8dOEMG0wvqB5L2N5X8yvAjcTf1MXYVZYyVUJEl1tBbtszOLoxAQSPXi5KjwKbXq8wowdKx8ekSXX1EtttcQ&usqp=CAE',
    imageAlt: "Resistance Bands Set",
    price: '$29',
    color: 'Multi-color',
  },
  {
    id: 4,
    name: 'Adjustable Dumbbell Set',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSSGuVjQvjCJk2Zr4DyZU-bZzW_78wZkTKwBX5sbAVzI-fSD6FpS8NQ9hecSLk_qEPW90ygygkVtHw5SS_YtPb0ACu7QK4WUzpInhYVG6OqCj6IhTP6jBXA&usqp=CAE',
    imageAlt: "Adjustable Dumbbell Set",
    price: '$199',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Yoga Mat',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQujiVczAHaKNGArPJFZ2zI2nG8rnxLHG0NNMmKGpjNcpgHQEsVjWmIN1bnFpqKN5r6l76vSU4cmDLWfsI7MveSOvTlo6q3odnVRymTQPk&usqp=CAE',
    imageAlt: "Yoga Mat",
    price: '$19',
    color: 'Purple',
  },
  {
    id: 6,
    name: 'Hydro Flask Water Bottle',
    href: '#',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR4u2C4hUmnwuo0M8dnwgiOxEpEWkYWQevTq_T9uTxdKov7Z7BeqB0FB84pVvkzifxfzM3wxIX842OIIngdXJEfcqYieaOkw4Py6YLC1j3g_1MuhIQbj9lH&usqp=CAE',
    imageAlt: "Hydro Flask Water Bottle",
    price: '$45',
    color: 'Stainless Steel',
  },
  {
    id: 7,
    name: 'Running Shoes',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtRrJAfImhzA5onlOxbqOdmHt-x0GCdoE6POUvA5X5km2pIRk1N6AHfhBNLlWe3hd2Xh4NY6kzBFm6lGEsyOeLe-GngrGafy-x3TIwhEWxVNvPaSjq-mTazA&usqp=CAE',
    imageAlt: "Running Shoes",
    price: '$89',
    color: 'Blue',
  },
  {
    id: 8,
    name: 'Fitness Tracker Smartwatch',
    href: '#',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRJ5GQpPVd1bM-OVDnIXSpNpUljsrMl4bd0hJd_5r1s0acmkyUzADDsWGB1Wv2UcnDrnYKKOdZFas4v2rz8Hs8djECcxY9xL1Fgq26fXgocbTPT_4G-NKfrOQ&usqp=CAE',
    imageAlt: "Fitness Tracker Smartwatch",
    price: '$179',
    color: 'Black',
  },
  {
    id: 9,
    name: 'Protein Bars Variety Pack',
    href: '#',
    imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRz-lsSGYqJgoJKjorvprxuljQN5DCoWxrvA0l4LBenJcrHnrAkERTx-YRPttNlnnDQsSy_0YXL_Q-e6nvGJKakiEdzS8p7TtfQmqyxID1TF7plAF9l2UNk&usqp=CAE',
    imageAlt: "Protein Bars Variety Pack",
    price: '$25',
    color: 'Multi-flavor',
  },
  {
    id: 10,
    name: 'Adjustable Weight Bench',
    href: '#',
    imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ-hu9GMbhdL2e7Er3Kbs1wXsDAz09nEFzhZ6vfqKznwAE8LLwiLloG_sjgJgv4lJml3Hy6Wpl1eXgvLegjCXzj3_TDFyxGRv2xkFuI3x6hpRvUiV-fFJv6&usqp=CAE',
    imageAlt: "Adjustable Weight Bench",
    price: '$149',
    color: 'Black',
  },
  {
    id: 11,
    name: 'Gym Weighted Vest',
    href: '#',
    imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQvt4-Wx7o4T3QkyeMnCp-HI6s6EcezX5klbwlLKAMrLSfO3QV4b6LA6MRIn61sRCuKhVOKu0lIz0amVRIMV_UIvSIVFPhYUEElFFTexS4&usqp=CAE',
    imageAlt: "Gym Weighted Vest",
    price: '$14',
    color: 'Black',
  },
  {
    id: 12,
    name: 'Creatine Monohydrate',
    href: '#',
    imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRlEPP61LnsMGti394MuEc5w7ElzKCdDIfM5Mo7OooEqLdCoOW0vTqjT9lIpueBmWzUUDaITaSYTxKP3X9EfrsGM_1fNkYwWvxNCeHHysZzsQc7lQt0hmdNkw&usqp=CAE',
    imageAlt: 'Creatine Monohydrate',
    price: '$120',
    // color: 'Black',
  },
];

// Products component
const Products = ({ addToCart }) => {
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product
  const [quantity, setQuantity] = useState(1); // State for quantity of product

  // Function to open modal and set selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.classList.add('modal-open'); // Add class to body for modal open
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedProduct(null);
    document.body.classList.remove('modal-open'); // Remove class from body for modal close
  };

  // Function to handle adding product to cart
  const handleAddToCart = (product) => {
    const productWithQuantity = { ...product, quantity }; // Add quantity to product object
    addToCart(productWithQuantity); // Dispatch addToCart action
    alert('Product added to cart!'); // Show alert
  };

  // Function to decrement quantity
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to increment quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-white">
  {/* Main container */}
  {/* Product Cards */}
  <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    {/* Product card container */}
    <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center"><i>Customers also purchased</i></h2>
    {/* Grid for products */}
    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
      {products1.map((product) => (
        <div key={product.id} className="group relative">
          {/* Product card */}
          <div className="relative w-full h-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <a href="#">
              <img
                className="h-60 w-60 object-cover rounded-t-lg"
                src={product.imageSrc}
                alt={product.imageAlt}
                onClick={() => openModal(product)}
              />
            </a>
            {/* Product details */}
            <div className="mt-4 px-5 pb-5">
              <a href="#" className="block text-xl font-semibold tracking-tight text-gray-900">
                {product.name}
              </a>
              <div className="mt-2.5 mb-2 flex items-center">
                {/* Rating stars (placeholder) */}
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    aria-hidden="true"
                    className="h-5 w-5 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              {/* Product price */}
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  {/* Product Modal */}
  {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
</div>

  );
};

export default connect(null, { addToCart })(Products); // Connect Products component to Redux store and dispatch addToCart action
