import React, {useState, useEffect} from 'react'
import './RentalsListPage.css'
import {RentalCard} from '../../components/RentalCard/RentalCard'
import axios from 'axios'

export const RentalsListPage = () => {

    const [rentalsList, setRentalsList] = useState([])

    const rentalsListEndpoint = 'https://gist.githubusercontent.com/huvber/b51c0279d3f452513a7c1f576a54f4d7/raw/4497a12b181713c6856303a666d240f7d561e4fe/mock-house'

    const listStateBuilder = () => {
        axios.get(
            rentalsListEndpoint
        )
        .then(found => {
            setRentalsList(found.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        listStateBuilder()
      }, []);

    return (
        <div className="rentalsListPageContainer">
            {rentalsList.map( (rental) => {
                return <RentalCard key={rental.id} {...rental}/>
            })}
        </div>
    )
}
