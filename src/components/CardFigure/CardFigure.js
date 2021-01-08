import React, { useState, useEffect } from "react";
import "./CardFigure.css";

//this should be an svg, not a png.
import figurePlaceholder from "../../assets/cardFigurePlaceholder/noImagePlaceholder.svg";

/**
 *  instead  of using state here that trigger unnecessary renders
 *  you can use the default argument of the prop or a mutally condition.
 *  with that your component would be much more simplier
 *  ```
 *  export const CardFigure = ({image}) => (
 *   <img className="cardFigureImg" src=(image ?? figurePlaceholder) alt="" />
 *  );
 *  ```
 */
export const CardFigure = (props) => {
  const { image } = props;

  const [rentalImage, setRentalImage] = useState(figurePlaceholder);

  const initialStateBuilder = () => {
    //this needs to be updated. The IF logic contemplating the placeholder must be added.
    setRentalImage(image);
  };

  useEffect(() => {
    initialStateBuilder();
  }, []);

  return <img className="cardFigureImg" src={rentalImage} alt="" />;
};
