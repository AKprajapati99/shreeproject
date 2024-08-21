import React, { Suspense } from 'react';
import Navbar from '../Components/Navbar/Navbar'; // Ensure you have this component
import Footer from '../Components/Footer/Footer'; // Ensure you have this component
import RoutesComponent from '../Routes/RoutesComponent'; // Import the routes component

const Main = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="loader-container" style={{ width: "75vw", height: "75vh" }}>
            <div className="loader-container-inner">
              <div className="text-center">
                {/* <Loader type="ball-pulse-rise" /> */}
              </div>
              <h6 className="mt-5">Please wait...</h6>
            </div>
          </div>
        }
      >
        <RoutesComponent /> 
      </Suspense>
      <Footer />
    </>
  );
};

export default Main;
