
// Render Gallery to the Dom by importing to GalleryItem.
  const GalleryImages = ({item, displayDescription}) => {

    return (
        <div>
            <img className="displayImage" 
                onClick={ () => {
                // displayDescription();
            }} 
            src={item.path}/>
        </div>
    )
}

// We'll export Gallery Images to Gallery Item.
export default GalleryImages;