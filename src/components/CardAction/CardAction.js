import React, {useState, useEffect} from 'react'

export const CardAction = (props) => {

    const {booked, bookable} = props

    const [actionName, setActionName] = useState('')

    const initialStateBuilder = () => {
        if (booked > 0) {
            setActionName('booked')
            
        } 
        else if (bookable === false) {
            setActionName('notAvailable')
        }
        else {
            setActionName('available')
        }
    }

    useEffect(() => {
        initialStateBuilder()
    }, []);
    
    return (
        <button>{actionName}</button>
    )
}
