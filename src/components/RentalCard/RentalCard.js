import React, { useState, useEffect } from "react";
import { CardStatus } from "../CardStatus/CardStatus";
import { CardFigure } from "../CardFigure/CardFigure";
import { CardDescription } from "../CardDescription/CardDescription";
import { CardAction } from "../CardAction/CardAction";

import "./RentalCard.css";

/*
 it is a good practise to decompose the props directly in the arguments of the arrow function.
 That increase readability and also allow to use the implict return that also increase readability.
 
 
 ```
 export const RentalCard = ({id, name, image, booked, bookable}) => (
     <div className="rentalCardContainer">
        <div className="cardStatusContainer">
            <CardStatus booked={booked} bookable={bookable}/>
        </div>
        <figure className="cardImageContainer">
            <CardFigure image={image}/>
        </figure>
        <div className="cardDescriptionAndActionContainer">
            <div className="cardDescriptionContainer">
                <CardDescription id={id} name={name}/>
            </div>
            <CardAction booked={booked} bookable={bookable}/>
        </div>
    </div>
 )

 ```
 */
export const RentalCard = (props) => {
  const { id, name, image, booked, bookable } = props;

  return (
    <div className="rentalCardContainer">
      <div className="cardStatusContainer">
        <CardStatus booked={booked} bookable={bookable} />
      </div>
      <figure className="cardImageContainer">
        <CardFigure image={image} />
      </figure>
      <div className="cardDescriptionAndActionContainer">
        <div className="cardDescriptionContainer">
          <CardDescription id={id} name={name} />
        </div>
        <CardAction booked={booked} bookable={bookable} />
      </div>
    </div>
  );
};
