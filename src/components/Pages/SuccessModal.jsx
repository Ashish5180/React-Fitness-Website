import React from 'react';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full">
        <div className="px-6 py-4">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-xl font-bold mt-4 mb-2">Form submitted successfully!</h2>
            <p className="text-gray-600">Thank you for your message.</p>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-100 text-right">
          <button
            className="text-sm text-gray-600 px-4 py-2 rounded-lg focus:outline-none hover:bg-gray-200"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
