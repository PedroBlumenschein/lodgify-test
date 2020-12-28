import React, {useState, useEffect} from 'react'
import './CardFigure.css'

//this should be an svg, not a png.
import figurePlaceholder from '../../assets/cardFigurePlaceholder/noImagePlaceholder.svg'

export const CardFigure = (props) => {

    const {image} = props

    const [rentalImage, setRentalImage] = useState(figurePlaceholder)

    const initialStateBuilder = () => {
        //this needs to be updated. The IF logic contemplating the placeholder must be added. 
        setRentalImage(image)
    }

    useEffect(() => {
        initialStateBuilder()
    }, []);

    return (
        <img className="cardFigureImg" src={rentalImage} alt="" />
    )
}
