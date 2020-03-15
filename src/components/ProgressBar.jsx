import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.scss";

export default function ProgressBar(props) {
  return (
    <div className="ProgressBar">
      <div
        className="progress"
        style={{
          width: `${Math.round((props.currentTime / props.duration) * 100)}%`
        }}
      />
    </div>
  );
}

ProgressBar.propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number
};
