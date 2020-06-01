import React from 'react';

const ImageList = props => {
  return props.images.map(({ description, id, urls }) => {
    return <img 
      src = {urls.regular} 
      key = {id}
      alt = {description}
    />
  })
}

export default ImageList;
