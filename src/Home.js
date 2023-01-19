import React from 'react'
import './App.css';
import Moviecard from './Moviecard';



const Home = () => {
  return (
    <>
    <div className='headline container-fluid'>
    <h1>Movie List</h1>
    <div className='card-grid'>
        <Moviecard/>
        
    </div>
    
    
   

    </div>
    <div>

    </div>
      
    </>
  )
}

export default Home
