import React, { useEffect, useState } from 'react';
import './App.css';
// Import Header Component
import Header from '../Header/Header';
// Import Footer Component
import Footer from '../Footer/Footer';
// Connect Client to Server, Import Axios
import axios from 'axios';


function App() {

// Declare Gallery List array and assigned it useState.
    let [galleryList, setGalleryList] = useState([]);

// onload the APP function to the DOM, when page loads. 
    useEffect(() => {
      console.log('in useEffect');
// calling getGallery Function
      getGallery();
    }, []);

// Use Axios to retrieve all data from the Gallery



//  use Axios to update (PUT) the like count /gallery/like/:id.
// PUT route function

const updateLikes = () => {
  console.log('in updateLikes PUT route'); 

// use Axios to pass id from guest.data 
    axios({
      method: 'PUT',
      url: (`/gallery/like/${id}`
    })
    .then((response) => {
      console.log('this is the response from PUT', response);
  // Call the getGallery Function
      getGallery();
    })
    .catch((error) => {
        console.log('PUT /gallery/like/${id} failed!', error);
    });
}

  return (
      <div className="App">
        <Header />
        <p>Gallery goes here</p>
        <img src="images/Bob-Marley.jpeg"/>
        <Footer />
      </div>
    );
}

export default App;
