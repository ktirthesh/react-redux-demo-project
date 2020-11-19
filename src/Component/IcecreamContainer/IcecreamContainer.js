import React from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from '../../Redux'

function IcecreamContainer(props) {
    return (
        <div>
            <h2>No of Icecreams-{props.numofIcecreams}</h2>
            <button onClick={props.buyIcecream}>Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numofIcecreams:state.icecream.numofIcecreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => dispatch(buyIcecream())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IcecreamContainer) 
