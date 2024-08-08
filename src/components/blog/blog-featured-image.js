import React from "react";

const BlogFeaturedImage = props => {
  if (!props.img) { //sino hay imagen retunr null
    return null;
  }

  return (
    <div className="featured-image-wrapper">
      <img src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;

// este componente es si hay o no hay imagen, para que no guarde el espacio