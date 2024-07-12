import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="p-4 bg-gray-200 rounded-md shadow-md mt-3 text-center w-full">
       
        {user && <p className=" text-center text-[12px] font-semibold mx-auto">{user.email}</p>}
      </div>
      <div className="mt-4 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Home;
