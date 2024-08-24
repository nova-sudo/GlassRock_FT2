import React, { useState, useEffect } from 'react';
import glassrock2 from "../assets/glassrock.jpg";
import "./Home.css";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Adjust the timeout as needed

    // Clean up timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  // Redirect to Landing.jsx when loading is finished
  useEffect(() => {
    if (!isLoading) {
      // Programmatically redirect using window.location.href
      window.location.href = '/landing';
    }
  }, [isLoading]);

  return (
    <div className='home-container'>
      <div className="logo-container">
        <img id="glassrock" src={glassrock2} alt=""/>
        {isLoading && <div className="loading-bar"></div>}
        {/* Placeholder link */}
        {/* <a href="/landing">Go to Landing</a> */}
      </div>
    </div>
  );
}

export default Home;
