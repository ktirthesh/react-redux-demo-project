import { BUY_ICECREAM } from "./icecreamTypes"

const initialState = {
    numofIcecreams : 20
}

const icecreamReducer = ( state = initialState , action) =>{
    switch(action.type) {
        case BUY_ICECREAM :
            return {
                ...state,
                numofIcecreams : state.numofIcecreams - 1
            }
        default :
            return state
    }
}

export default icecreamReducer
