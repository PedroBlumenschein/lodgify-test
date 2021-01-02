import React, {useState, useEffect} from 'react'
import './CardStatus.css'

export  const CardStatus = (props) => {

    const {booked, bookable} = props

    const [status, setStatus] = useState('')
    const [statusBackgroundColor, setStatusBackgroundColor] = useState('')

    const componentConstants = {
        backgroundColor: {
            booked: '#2C64B7',
            unavailable: '#E02323',
            available: '#11A960'
        },
        content: {
            booked: 'booked',
            unavailable: 'unavailable',
            available: 'available'
        }
    }

    const initialStateBuilder = () => {
        if (booked > 0) {
            setStatus(componentConstants.content.booked)
            setStatusBackgroundColor(componentConstants.backgroundColor.booked)
        } 
        else if (bookable === false) {
            setStatus(componentConstants.content.unavailable)
            setStatusBackgroundColor(componentConstants.backgroundColor.unavailable)
        }
        else {
            setStatus(componentConstants.content.available)
            setStatusBackgroundColor(componentConstants.backgroundColor.available)
        }
    }

    useEffect(() => {
        initialStateBuilder()
      }, []);

    return (
        <div className="cardStatusMainContainer" style={{backgroundColor: statusBackgroundColor}}>
            <p>{status}</p>
        </div>
    )
}
