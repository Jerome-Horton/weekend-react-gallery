import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

// Pass gallery data using props to the GalleryList Component
// Iterate (loop over) the list of gallery data


    function GalleryList({gallery, updateLikes}) {
        return (

            <>
                <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {gallery.map((item) => {
                        return (
                        <GalleryItem
                            key = {item.id}
                            item = {item}
                            updateLikes ={() => updateLikes(item.id)}
                        />
                    )
                    })}
                </ul>
            </>
        )
    }


export default GalleryList;