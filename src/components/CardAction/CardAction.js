import React, {useState, useEffect} from 'react'
import './CardAction.css'
import checkIcon from '../../assets/icons/iconcheck.svg'

export const CardAction = (props) => {

    const {booked, bookable} = props

    const [actionName, setActionName] = useState('')
    const [actionBackgroundColor, setActionBackgroundColor] = useState('')

    const initialStateBuilder = () => {
        if (booked > 0) {
            setActionName('booked')
        } 
        else if (bookable === false) {
            setActionName('Not bookable');
            setActionBackgroundColor('#B2B2B2')
        }
        else {
            setActionName('Book');
            setActionBackgroundColor('#2C64B7')
        }
    }

    useEffect(() => {
        initialStateBuilder()
    }, []);
    
    if (actionName === 'booked') {
        return (
            <p className="cardActionBooked"><img src={checkIcon} alt=""/> Booked for {booked} days</p>
        )
    }
    else {
        return (
            <button className="cardActionButton" style={{backgroundColor: actionBackgroundColor}}>{actionName}</button>
        )
    }
    
}
