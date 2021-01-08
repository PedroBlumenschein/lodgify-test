import React, { useState, useEffect } from "react";
import "./CardAction.css";
import checkIcon from "../../assets/icons/iconcheck.svg";

/**
 *
 * as the other components there is no need for the state and
 * again should be better to use classes in css rather the styles
 * props.
 * In this case even better you can use the disable attribute of the button
 * to define the style
 *
 * Here an example of how much easier this component could be
 * ```
 * export const CardAction = ({booked, bookable}) => (
 *  <>
 *      {booked > 0
 *          ? (
 *              <p className="cardActionBooked">
 *                  <img src={checkIcon} alt="" />
 *                  {`Booked for ${booked} day${booked > 1 ? 's' : ''}`}
 *              </p>
 *          ) : (
 *              <button className="cardActionButton" disabled={!bookable}>
 *                  {bookable ? 'Book' : 'Not bookable'}
 *              </button>
 *          )
 *       }
 *  </>
 * )
 */
export const CardAction = (props) => {
  const { booked, bookable } = props;

  const [actionName, setActionName] = useState("");
  const [actionBackgroundColor, setActionBackgroundColor] = useState("");

  const componentConstants = {
    backgroundColor: {
      notBookable: "#B2B2B2",
      book: "#2C64B7",
    },
    content: {
      booked: "booked",
      notBookable: "Not bookable",
      book: "Book",
    },
  };

  const initialStateBuilder = () => {
    if (booked > 0) {
      setActionName(componentConstants.content.booked);
    } else if (bookable === false) {
      setActionName(componentConstants.content.notBookable);
      setActionBackgroundColor(componentConstants.backgroundColor.notBookable);
    } else {
      setActionName(componentConstants.content.book);
      setActionBackgroundColor(componentConstants.backgroundColor.book);
    }
  };

  useEffect(() => {
    initialStateBuilder();
  }, []);

  if (actionName === "booked") {
    return (
      <p className="cardActionBooked">
        <img src={checkIcon} alt="" /> Booked for {booked} days
      </p>
    );
  } else {
    return (
      <button
        className="cardActionButton"
        style={{ backgroundColor: actionBackgroundColor }}
      >
        {actionName}
      </button>
    );
  }
};
