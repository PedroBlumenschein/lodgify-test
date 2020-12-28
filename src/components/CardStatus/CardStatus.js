import React, {useState, useEffect} from 'react'
import './CardStatus.css'

export  const CardStatus = (props) => {

    const {booked, bookable} = props

    const [status, setStatus] = useState('')
    const [backgroundColor, setBackgroundColor] = useState('')

    const initialStateBuilder = () => {
        if (booked > 0) {
            setStatus('booked')
            setBackgroundColor('#2C64B7')
        } 
        else if (bookable === false) {
            setStatus('unavailable')
            setBackgroundColor('#E02323')
        }
        else {
            setStatus('available')
            setBackgroundColor('#11A960')
        }
    }

    useEffect(() => {
        initialStateBuilder()
      }, []);

    return (
        <div className="cardStatusMainContainer" style={{backgroundColor: backgroundColor}}>
            <p>{status}</p>
        </div>
    )
}
