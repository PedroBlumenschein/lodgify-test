import React, { useState, useEffect } from "react";
import "./RentalsListPage.css";
import { RentalCard } from "../../components/RentalCard/RentalCard";
import axios from "axios";

export const RentalsListPage = () => {
  const [rentalsList, setRentalsList] = useState([]);

  /*
        since you did it in the end would be better to separate that part from 
        the presentation purpose of the react component. 
        Create a custom hook for managing the request is a good practise to 
        separate the api layer from the presentation layer
        
        use-rentals.js
        ```
        import React, {useState, useEffect} from 'react'
        import axios from 'axios'

        const rentalsListEndpoint = 'https://gist.githubusercontent.com/huvber/b51c0279d3f452513a7c1f576a54f4d7/raw/4497a12b181713c6856303a666d240f7d561e4fe/mock-house'

        export const useRentals = () => {
            const [rentals, setRentals] = useState([]);
            const [error, setError] = useState(null);
            useEffect(() => {
                (async () => {
                    try {
                        const response = await axios.get(rentalListEndpoint);
                        return setRentals(response.data);
                    } catch (error) {
                        return setError(error.message);
                    }
                })();
            }, []);

            return {rentals, error};
        }
        ```

        and then in this very page just
        ```
            const {error, rentals} = useRentals();

            if(error) console.log(error)

            ...
        ```
    */
  const rentalsListEndpoint =
    "https://gist.githubusercontent.com/huvber/b51c0279d3f452513a7c1f576a54f4d7/raw/4497a12b181713c6856303a666d240f7d561e4fe/mock-house";

  const listStateBuilder = () => {
    axios
      .get(rentalsListEndpoint)
      .then((found) => {
        setRentalsList(found.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    listStateBuilder();
  }, []);

  return (
    <div className="rentalsListPageContainer">
      {/* doesn't need to return would be more readble using the autoreturn convention
                ```
                 {rentalsList.map(rental => (<RentalCard key={rental.id} {...rental} />)} 
                ```   
            */}
      {rentalsList.map((rental) => {
        return <RentalCard key={rental.id} {...rental} />;
      })}
    </div>
  );
};
