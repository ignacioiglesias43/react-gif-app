import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
      <img src={url} alt={title} />
      <p className="animate__jello animate__backInDown animate__delay-2s">
        {title}
      </p>
    </div>
  );
};

export default GifGridItem;
GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
