import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// Pass gallery data using props to the GalleryList Component
// Iterate (loop over) the list of gallery data


    function GalleryList({gallery, updateLikes}) {
        return (

            <>
                <div>
                    {gallery.map((item) => {
                        <GalleryItem
                            key = {item.id}
                            item = {item}
                            updateLikes = {updateLikes}
                        />
                    })}
                </div>
            </>
        )
    }


export default GalleryList;