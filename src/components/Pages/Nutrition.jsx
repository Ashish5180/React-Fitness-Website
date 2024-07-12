import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import Axios for HTTP requests
import { BsCheckCircle } from 'react-icons/bs'; // Import the check circle icon

// Nutrition component
const Nutrition = () => {
  // State for input parameters and API response
  const [params, setParams] = useState({ // State for input parameters
    measurement_units: 'std',
    sex: 'female',
    age_value: '20',
    age_type: 'yrs',
    feet: '5',
    inches: '2',
    lbs: '120',
    activity_level: 'Active'
  });
  const [nutritionData, setNutritionData] = useState(null); // State to store API response

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value
    }));
  };

  // Function to handle form submission and fetch data from the API
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://nutrition-calculator.p.rapidapi.com/api/nutrition-info',
      params: params,
      headers: {
        'X-RapidAPI-Key': 'bc2276fcd2mshc9d6056624fcb4ep118d3cjsndb01934ae9ac',
        'X-RapidAPI-Host': 'nutrition-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options); // Send axios request
      setNutritionData(response.data); // Store API response in state
    } catch (error) {
      console.error(error); // Log error
      // Handle error state here if needed
    }
  };

  return (
    <div className="p-4 bg-[#0B1215] text-white "> {/* Main container */}
      {/* Form to input parameters */}
      <h1 className='text-3xl font-bold text-center m-5'>Get Your All Nutrition Info According to your Parameters</h1> {/* Title */}
      <div className='md:flex justify-center content-center'> {/* Form container */}
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"> {/* Form */}
          <div className="mb-4"> {/* Input fields */}
            {/* Sex input */}
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="sex">
              Sex:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                id="sex"
                type="text"
                name="sex"
                value={params.sex}
                onChange={handleChange}
                placeholder='Male/Female Or Other'
              />
            </label>
            {/* Age value input */}
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="age_value">
              Age Value:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                id="age_value"
                type="text"
                name="age_value"
                value={params.age_value}
                onChange={handleChange}
                placeholder='Age in years'
              />
            </label>
            {/* Feet input */}
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="feet">
              Feet:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                id="feet"
                type="text"
                name="feet"
                value={params.feet}
                onChange={handleChange}
                placeholder='Height in feet'
              />
            </label>
            {/* Inches input */}
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="inches">
              Inches:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                id="inches"
                type="text"
                name="inches"
                value={params.inches}
                onChange={handleChange}
                placeholder='Remaining Height in inches'
              />
            </label>
            {/* Lbs input */}
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="lbs">
              Lbs:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                id="lbs"
                type="text"
                name="lbs"
                value={params.lbs}
                onChange={handleChange}
                placeholder='Weight in lbs'
              />
            </label>
            {/* Activity level input */}
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="activity_level">
              Activity Level:
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight bg-gray-800 focus:outline-none focus:shadow-outline"
                id="activity_level"
                type="text"
                name="activity_level"
                value={params.activity_level}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Button to submit the form */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Get Nutrition Info
          </button>
        </form>

        {/* Display BMI & EER */}
        <div className="bg-gray-900 shadow-md rounded p-4 h-40 mx-auto text-center my-auto gap-3"> {/* Nutrition data container */}
          <h2 className="text-lg font-bold mb-2">BMI & EDC</h2> {/* Title */}
          {/* BMI */}
          <div className="flex items-center mb-2">
            <BsCheckCircle className="text-green-500 mr-2" /> {/* Check circle icon */}
            <span className="font-semibold">BMI:</span> {nutritionData?.BMI_EER?.BMI || 'Loading...'} {/* BMI value */}
          </div>
          {/* Estimated Daily Caloric Needs */}
          <div className="flex items-center">
            <BsCheckCircle className="text-green-500 mr-2" /> {/* Check circle icon */}
            <span className="font-semibold">Estimated Daily Caloric Needs:</span>{' '}
            {nutritionData?.BMI_EER?.['Estimated Daily Caloric Needs'] || 'Loading...'} {/* Caloric needs value */}
          </div>
        </div>
      </div>

      {/* Display nutrition data in cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-2"> {/* Nutrition data cards */}
        {/* Macronutrients card */}
        <div className="bg-gray-900 shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Macronutrients</h2> {/* Title */}
          {/* Macronutrient data */}
          {nutritionData?.macronutrients_table?.['macronutrients-table']?.map((nutrient, index) => (
            <div key={index} className="flex items-center mb-2">
              <BsCheckCircle className="text-green-500 mr-2" /> {/* Check circle icon */}
              <span className="font-semibold w-32">{nutrient[0]}:</span> {/* Nutrient name */}
              <span className="flex-1">{nutrient[1]}</span> {/* Nutrient value */}
            </div>
          ))}
        </div>

        {/* Minerals card */}
        <div className="bg-gray-900 shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Minerals</h2> {/* Title */}
          {/* Mineral data */}
          {nutritionData?.minerals_table?.['essential-minerals-table']?.map((mineral, index) => (
            <div key={index} className="flex items-center mb-2">
              <BsCheckCircle className="text-green-500 mr-2" /> {/* Check circle icon */}
              <span className="font-semibold w-32">{mineral[0]}:</span> {/* Mineral name */}
              <span className="flex-1">{mineral[1]} ({mineral[2]})</span> {/* Mineral value and unit */}
            </div>
          ))}
        </div>

        {/* Vitamins card */}
        <div className="bg-gray-900 shadow-md rounded p-4">
          <h2 className="text-lg font-bold mb-2">Vitamins</h2> {/* Title */}
          {/* Vitamin data */}
          {nutritionData?.vitamins_table?.['vitamins-table']?.map((vitamin, index) => (
            <div key={index} className="flex items-center mb-2">
              <BsCheckCircle className="text-green-500 mr-2" /> {/* Check circle icon */}
              <span className="font-semibold w-32">{vitamin[0]}:</span> {/* Vitamin name */}
              <span className="flex-1">{vitamin[1]} ({vitamin[2]})</span> {/* Vitamin value and unit */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition; // Export Nutrition component
