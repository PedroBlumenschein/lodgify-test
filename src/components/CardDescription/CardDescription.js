import React, { useState, useEffect } from "react";
import "./CardDescription.css";

/**
 * As the other no need any additional state for this.
 *
 */
export const CardDescription = (props) => {
  const { id, name } = props;

  const [rentalId, setRentalId] = useState("");
  const [rentalName, setRentalName] = useState("");

  const initialStateBuilder = () => {
    setRentalId(id);
    setRentalName(name);
  };

  useEffect(() => {
    initialStateBuilder();
  }, []);

  return (
    <div>
      <p className="rentalId">Id: {rentalId}</p>
      {/* the ellipsis could be done in css, no need to do it in js and doing in css allow the crawler to read the full information */}
      <p className="rentalName">
        {rentalName.length > 40 ? rentalName.slice(0, 40) + "..." : rentalName}
      </p>
    </div>
  );
};
