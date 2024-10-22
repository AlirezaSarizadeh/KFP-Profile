import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


// Create the UserContext
const UserContext = createContext();

// Create a hook to access the context
export const useUserType = () => useContext(UserContext);


// Define the provider for the context
export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState();
  const [loading, setLoading] = useState(true);

  // Function to fetch user type using the token from localStorage
  const fetchUserType = async () => {
    const token = localStorage.getItem('token');  // Get the token from localStorage

    if (token) {
      try {
        const response = await axios.post('https://profile.kfp-dental.com/api/user/check', {}, {
          headers: {
            token: token
          }
        });
        setUserType(response.data);  // Set userType from the API response
        console.log(response.data);


        setLoading(false);           // Set loading to false when userType is fetched
      } catch (error) {
        console.error('Error fetching user type:', error);
        setLoading(false);  // Even if there's an error, we stop loading
      }
    } else {
      setLoading(false);  // If no token, we stop loading
    }
  };

  // Effect to fetch the user type on initial load
  useEffect(() => {
    fetchUserType();
  }, []);

  // Effect to watch localStorage changes (for the token)
  useEffect(() => {
    const handleStorageChange = () => {
      fetchUserType();  // Re-fetch userType if the token changes
    };

    // Add an event listener to detect changes in localStorage (e.g., when user logs in)
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange); // Cleanup listener
    };
  }, []);


  return (
    <UserContext.Provider value={userType}>
      {!loading ? children : <p>Loading...</p>}  {/* Show loading until userType is ready */}
    </UserContext.Provider>
  );
};
