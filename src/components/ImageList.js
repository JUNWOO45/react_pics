import React from 'react';

const ImageList = props => {
  return props.images.map(image => {
    return <img 
      src={image.urls.regular} 
      key = {image.id}
    />
  })
}

export default ImageList;
