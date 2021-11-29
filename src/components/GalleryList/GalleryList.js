import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// Pass gallery data using props to the GalleryList Component
// Iterate (loop over) the list of gallery data


    function GalleryList({gallery, updateLikes}) {
        return (

            <>
                <ul>
                    {gallery.map((item) => {
                        return (
                        <GalleryItem
                            key = {item.id}
                            item = {item}
                            updateLikes = {updateLikes}
                        />
                    )})}
                </ul>
            </>
        )
    }


export default GalleryList;