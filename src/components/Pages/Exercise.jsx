import React, { useState, useEffect } from 'react'; // Import React library
import axios from 'axios'; // Import Axios for HTTP requests
import { BsSearch } from 'react-icons/bs'; // Import BsSearch icon from react-icons

// ExerciseList component
const ExerciseList = () => {
  // State variables using useState hook
  const [exercises, setExercises] = useState([]); // State for storing exercises
  const [loading, setLoading] = useState(true); // State for loading status
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [error, setError] = useState(null); // State for error message

  // useEffect hook for fetching data
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      // Axios request options
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'bc2276fcd2mshc9d6056624fcb4ep118d3cjsndb01934ae9ac',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      try {
        // Send axios request
        const response = await axios.request(options);
        console.log("Response data:", response.data); // Log response data
        setExercises(response.data); // Set exercises state with response data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching data:", error); // Log error
        setError(error.message); // Update error state
        setLoading(false); // Set loading to false
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  // Event handler for search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term state
  };

  // Filter exercises based on search term
  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-white relative top-12"> {/* Main container */}
      <h1 className="text-3xl font-bold mb-4 text-center text-black">Exercise According to your requirements</h1> {/* Title */}
      <div className="flex justify-center mb-4"> {/* Search input container */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={handleSearch}
            className="px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-80 bg-gray-800 text-white"
          /> {/* Search input field */}
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> {/* Search icon container */}
            <BsSearch className="text-gray-400" /> {/* Search icon */}
          </div>
        </div>
      </div>
      {loading ? ( //{/* Conditional rendering based on loading status */}
        <p className="text-white">Loading...</p> //{/* Loading message */}
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full h-full"> {/* Exercise grid */}
          {filteredExercises.map((exercise) => ( //{/* Map through filtered exercises */}
            <div key={exercise.id} className=" rounded-lg shadow-md p-4 flex flex-col justify-center items-center"> {/* Exercise card */}
              <img src={exercise.gifUrl} alt={exercise.name} className="w-60 h-60 object-cover mb-4 rounded-lg" /> {/* Exercise image */}
              <h2 className="text-xl font-semibold text-black">{exercise.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseList; // Export ExerciseList component
