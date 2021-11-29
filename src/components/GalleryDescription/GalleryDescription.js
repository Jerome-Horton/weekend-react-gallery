import React from 'react';

function GalleryDescription ({item}) {
    console.log('in GalleryDescription')

    return (

        <div className="Description">

        {item.description}

        </div>

    )
}


export default GalleryDescription;