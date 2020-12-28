import React, {useState, useEffect} from 'react'

//this should be an svg, not a png.
import figurePlaceholder from '../../assets/cardFigurePlaceholder/Placeholder.png'

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
        <img src={rentalImage} alt="" />
    )
}
