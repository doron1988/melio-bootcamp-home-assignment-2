import React from "react";
import "./Card.css";
import {FavoriteIcon} from "../FavoriteIcon/FavoriteIcon";



export const Card = (props) => {

  const handleFavoriteClick = (email) => {
      props.changeFavoriteFlag(email);
  };

  return (
    <div className="card">
        <img className="candidatePicture" src={props.picture}/>
        <div className="cardData">
            <div className="firstLine">
                <div className="name">{props.firstName} {props.lastName}</div>
                {props.isPreferred ? <div className="preferred">PREFERRED</div> : ''}
            </div>
            <div className="secondLine">
                <div className="email" >{props.email} </div>
            </div>
            <div className="thirdLine">
                <div className="cityAndCountry">{props.city}, {props.country}</div>
            </div>
        </div>
        <div className = "favoriteIcon">
            {props.isFavorite ? <div className="favorite"><FavoriteIcon email={props.email} clickFavorite={handleFavoriteClick}/></div> : <div className="noFavorite"><FavoriteIcon email={props.email} clickFavorite={handleFavoriteClick}/></div>}
        </div>
    </div>
  );
};



