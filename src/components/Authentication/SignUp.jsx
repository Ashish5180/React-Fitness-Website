import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); // State for success message
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setShowSuccess(true); // Show success message on successful signup
      setTimeout(() => {
        navigate("/");
      }, 4000); // Redirect to home after 4 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  // Reset success message on component unmount or email/password change
  useEffect(() => {
    return () => {
      setShowSuccess(false);
    };
  }, [email, password]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg border border-gray-300 shadow-xl">
        <div className="space-y-8">
          <div className="mx-auto space-y-3">
            <h1 className="text-3xl font-bold text-gray-700 text-center">Signup</h1>
            <h2 className="text-xl font-bold text-red-500 text-center">Signup to Access Service</h2>
            {error && <div className="text-red-600 text-center mt-3">{error}</div>}
            {showSuccess && <div className="text-green-600 text-center mt-3 text-2xl font-bold">Successfully signed up. Redirecting...</div>}
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm mt-4"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/Login" className="font-medium text-blue-500 hover:text-blue-600">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
