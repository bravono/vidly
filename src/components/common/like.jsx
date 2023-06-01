import React from "react";

const Like = ({ onLike, liked }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <i
      onClick={onLike}
      className={classes}
      style={{ cursor: "pointer" }}
      area-hidden="true"
    ></i>
  );
};

export default Like;
