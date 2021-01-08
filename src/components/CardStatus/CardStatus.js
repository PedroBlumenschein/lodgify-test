import React, { useState, useEffect } from "react";
import "./CardStatus.css";

/**
 * 
 *  I will write in this component but it apply to a lot of components
    In component like this one you set redoundant statuses and for that
    you needed to write effect to set thenm. This force react to do 
    un-necessary re-render of the inner elements. 
    it's better to use just the props.
    States and effect need to be use when you have external interactivity 
    from the props. in this case is not make a lot of sense. 
    If you need transformation maybe it's better to use a useMemo or a useCallback.  
 */
export const CardStatus = (props) => {
  const { booked, bookable } = props;

  const [status, setStatus] = useState("");
  const [statusBackgroundColor, setStatusBackgroundColor] = useState("");

  /**
   * write css rule inside javascript and use it in style prop is a bad
   * practise because doesn't allow you to use all the good things about css
   * in this case would be much better to define classes and use them instead of styles
   * props.
   */
  const componentConstants = {
    backgroundColor: {
      booked: "#2C64B7",
      unavailable: "#E02323",
      available: "#11A960",
    },
    content: {
      booked: "booked",
      unavailable: "unavailable",
      available: "available",
    },
  };

  const initialStateBuilder = () => {
    if (booked > 0) {
      setStatus(componentConstants.content.booked);
      setStatusBackgroundColor(componentConstants.backgroundColor.booked);
    } else if (bookable === false) {
      setStatus(componentConstants.content.unavailable);
      setStatusBackgroundColor(componentConstants.backgroundColor.unavailable);
    } else {
      setStatus(componentConstants.content.available);
      setStatusBackgroundColor(componentConstants.backgroundColor.available);
    }
  };

  useEffect(() => {
    initialStateBuilder();
  }, []);

  return (
    <div
      className="cardStatusMainContainer"
      style={{ backgroundColor: statusBackgroundColor }}
    >
      <p>{status}</p>
    </div>
  );
};
