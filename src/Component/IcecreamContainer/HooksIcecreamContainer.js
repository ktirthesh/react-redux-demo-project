import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIcecream } from '../../Redux'

function HooksIcecreamContainer() {
    const numofIcecreams = useSelector(state => state.icecream.numofIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>HooksIcecreamContainer</h2>
            <h2>No of Icecream - {numofIcecreams}</h2>
            <button onClick={() => dispatch(buyIcecream())}> Buy Icecream</button>
        </div>
    )
}

export default HooksIcecreamContainer
