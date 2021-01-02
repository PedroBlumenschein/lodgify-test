import React, {useState, useEffect} from 'react'
import './CardDescription.css'

export const CardDescription = (props) => {

    const {id, name} = props

    const [rentalId, setRentalId] = useState('')
    const [rentalName, setRentalName] = useState('')

    const initialStateBuilder = () => {
        setRentalId(id);
        setRentalName(name)
    }

    useEffect(() => {
        initialStateBuilder()
    }, []);

    return (
        <div>
            <p className="rentalId">Id: {rentalId}</p>
            <p className="rentalName">{rentalName.length > 40 ? rentalName.slice(0,40) + '...' : rentalName}</p>
        </div>
    )
}
