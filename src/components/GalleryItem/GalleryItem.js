
import { useState } from "react";
import GalleryDescription from '../GalleryDescription/GalleryDescription';
import GalleryImages from '../GalleryImages/GalleryImages';

// Create Gallery Item function and pass it the individual gallery item via props.
    function galleryItem({item, updateLikes}) {
        console.log('in GalleryItem')

        let [showImage, setShowImage] = useState(true);

// UseState is set to true by default, so if description is requested,
// We need to change setShowImage  to false

        const displayDescription = () => {
            setShowImage(false);

// Implemented a time count for image transition

            timeCount(() => {
                setShowImage(true);
            }, 8000); // 8 secs

}


        if(showImage) {
        
            return (
                <div>
                     <GalleryImages 
                     item = {item}
                     displayDescription = {displayDescription}/> 
                    <button onClick={ () => updateLikes(item.id)}>Love It</button>
                    <p>{item.likes}</p>
                </div>
            )
        }
// else statement to show description
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