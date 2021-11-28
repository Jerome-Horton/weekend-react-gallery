import { useState } from "react";
import GalleryDescription from '../GalleryDescription/GalleryDescription';

// Create Gallery Item function and pass it the individual gallery item via props.
    function galleryItem({item, updateLikes}) {

        let [showImage, setShowImage] = useState(true);

// UseState is set to true by default, so if description is requested,
// We need to change setShowImage  to false
// Create a function for description...do a new component for it to import it.
// Also new component for images.


        if(showImage) {
        
            return (
                <div>
                    {/* <galleryImages
                        item = {item}
                    /> */}
                    <button onClick={ () => updateLikes(item.id)}>Love It</button>
                    <p>{item.likes}</p>
                </div>
            )
        }

        return (
            <div>
                 <GalleryDescription
                    item = {item}
                /> 
                <button onClick={ () => updateLikes(item.id)}>Love It</button>
                <p>{item.likes}</p>
            </div>
        
        )
}


// Export Gallery Item component to GalleryList component
export default galleryItem;