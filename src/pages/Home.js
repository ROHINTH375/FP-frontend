// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [connectionStatus, setConnectionStatus] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/test'); // Adjust URL as needed
        setConnectionStatus(response.data.message || 'Backend connected successfully!');
      } catch (error) {
        setConnectionStatus('Failed to connect to backend');
        console.error("Error connecting to backend:", error);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="p-4 text-center" style={{display:"flex", flexDirection:"column", justifyContent:"start", alignItems:"center", fontFamily:"monospace", backgroundImage:`url(https://img.freepik.com/free-photo/portrait-group-happy-students-casual-outfit-with-books-while-standing_8353-6397.jpg?t=st=1730489860~exp=1730493460~hmac=6927752cae18c122fcacfa386e8294421c07e3406d6da382e63698d6ea3c16df&w=826)`, height:"100vh", width:"100%", backgroundSize:"cover", backgroundPosition: "center"}}>
      <h1 className="text-2xl font-bold mb-4">Welcome to the College Placement Management System</h1>
      <p className="text-lg">{connectionStatus || 'Checking backend connection...'}</p>
        
      <header className=" p-4 width-100vh items-end w-full ">
        <div className="container mx-auto flex justify-between items-end place-content-between">
          {/* <h1 className="text-white text-2xl font-bold items-center">Rohinth Institute of technology</h1> */}
          <nav>
            <ul className="flex space-x-4 justify-end justify-items-end place-content-end p-2.5 pl-1.5 pl-6">
              <li><a href="Home" className=" text-xl hover:text-blue-200">Home</a></li>
              <li><a href="About" className="text-xl hover:text-blue-200">About</a></li>
              <li><a href="Admin" className=" text-xl hover:text-blue-200">Admissions</a></li>
              <li><a href="Students" className=" text-xl hover:text-blue-200">Courses</a></li>
              <li><a href="contacts" className=" text-xl hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header> 


      <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold">Welcome to Our College</h2>
          <p className="mt-4 text-lg">Empowering students for a brighter future.</p>
          <button
            id="exploreButton"
            className="mt-8 bg-white text-blue-700 px-4 py-2 rounded"
            onClick={() => alert('Explore our courses and facilities!')}
          >
            Explore More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Courses Offered</h3>
            <p className="mt-2">Explore a wide range of courses tailored to your interests.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Campus Life</h3>
            <p className="mt-2">Join various clubs and activities to enrich your college experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Career Services</h3>
            <p className="mt-2">Get support in job placements and internships.</p>
          </div>
        </div>


    </div>
    

    
  );
};

export default Home;
