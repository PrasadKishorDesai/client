import React from 'react'
import Navbar from './Navbar'
import StudentsData from './StudentsData';

const Home = () => {
    document.title = "Home";
    return (
        <div>
            <Navbar />
            <StudentsData />
        </div>
    )
}

export default Home
