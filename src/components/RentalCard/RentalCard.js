import React, {useState, useEffect} from 'react'
import {CardStatus} from '../RentalStatus/CardStatus'
import {CardFigure} from '../CardFigure/CardFigure'
import {CardDescription} from '../CardDescription/CardDescription'
import {CardAction} from '../CardAction/CardAction'

import './RentalCard.css'

export const RentalCard = (props) => {

    const {id, name, image, booked, bookable} = props


    return (
        <div className="rentalCardContainer">
            <div className="cardStatusContainer">
                <CardStatus booked={booked} bookable={bookable}/>
            </div>
            <div className="cardImageContainer">
                <CardFigure image={image}/>
            </div>
            <div className="cardDescriptionAndActionContainer">
                <CardDescription id={id} name={name}/>
                <CardAction booked={booked} bookable={bookable}/>
            </div>
        </div>
    )
}
