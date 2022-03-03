import React from "react";
import Heart from "./assets/icons/heart.svg?component";
import "./FavoriteIcon.css";

export const FavoriteIcon = (props) => {
  return (
    <div className="favorite-icon-wrapper" >
      <Heart className="favorite-icon" />
    </div>
  );
};
