import { useState, useEffect } from 'react';  // import the hooks you are going to use
import axios from 'axios';

// Citation for the following functions:
// Date: 02/26/2025
// Based on: CS 340 Starter Code
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app

function HomePage() {
  //  // useState hook to initialize the diagnosticData state variable to store the fetched data
  //  const [diagnosticData, setDiagnosticData] = useState([]);

  //  // Define a function to fetch diagnostic data from the API
  //  const fetchDiagnosticData = async () => {
  //    try {
  //      // Construct the URL for the API call
  //      const URL = `${import.meta.env.VITE_API_URL}/api/diagnostic`;
  //      // Use Axios to make the GET request
  //      const response = await axios.get(URL);
  //      // Update state with the response data
  //      setDiagnosticData(response.data);
  //    } catch (error) {
  //      // Handle any errors that occur during the fetch operation
  //      console.error('Error fetching diagnostic data:', error);
  //      alert('Error fetching diagnostic data from the server.');
  //    }
  //  };
 
  //  // useEffect hook to trigger the fetchDiagnosticData function when the component mounts
  //  useEffect(() => {
  //    fetchDiagnosticData();
  //  }, []);
 
  //  // Determine content based on diagnosticData length from the fetch action
  //  let content;
  //  if (diagnosticData === null) {
  //    content = <p>Loading diagnostic data...</p>; // Show while data is null
  //  } else if (diagnosticData.length === 0) {
  //    content = <p>No diagnostic data found.</p>; // Show if data is an empty array
  //  } else {
  //    content = <pre>{JSON.stringify(diagnosticData, null, 2)}</pre>;
  //  }
 
   // display the content and anything else
   return (
     <>
      {/* <h2>Diagnostic Data</h2>
       {content}
 
      <h2>Feel free to add any information you like about your project</h2> */}
      <p>Welcome to Benton County Dealership Service.

Please use the navigation bar above to view and edit information about our cars, dealerships, customers, employees, and past purchases.</p>
     </>
   );
 }
export default HomePage;
