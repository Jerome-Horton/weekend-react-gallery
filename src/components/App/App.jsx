import React, { useEffect, useState } from 'react';
import './App.css';
// Import Header Component
import Header from '../Header/Header';
// Import Footer Component
import Footer from '../Footer/Footer';
// Connect Client to Server, Import Axios
import axios from 'axios';
// Import GalleryList Component
import GalleryList from '../GalleryList/GalleryList';


function App() {

// Declare Gallery List array and assigned it useState.
    let [gallery, setGallery] = useState([]);

// onload the APP function to the DOM, when page loads. 
    useEffect(() => {
      console.log('in useEffect');
// calling getGallery Function
      getGallery();
    }, []);

// Use Axios to retrieve all data from the Gallery

const getGallery = () => {
  console.log('in getGallery GET ROUTE');
// Do axios method to connect GET ROUTE
      axios({
        method: 'GET',
        url: '/gallery',
      })
      .then((response) => {
        console.log('this is the response from GET', response.data);
    // take the data from the response and pass it to the server using setGalleryList
      setGallery(response.data);
      })
      .catch((error) => {
          console.log('GET /gallery failed!', error);
      }); // end of Axios Get Route
} // end of getGallery Function

//  use Axios to update (PUT) the like count /gallery/like/:id.
// PUT route function

const updateLikes = () => {
  console.log('in updateLikes PUT route'); 

// use Axios to pass id from guest.data 
    axios({
      method: 'PUT',
      url: (`/gallery/like/${id}`)
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
        <GalleryList 
          gallery={gallery} 
        />
        <Footer />
      </div>
    );
}

export default App;
