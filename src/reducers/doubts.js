import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import {UPDATE_DOUBTS} from '../actions/actionTypes';

const initialDoubtState={
    doubts:[],
    // searchResults:[],

}

export default function doubts(state=initialDoubtState,action){
    switch(action.type){
        case UPDATE_DOUBTS:
            return {
                doubts:action.doubts
            }
        default:
            return state    
    }
}