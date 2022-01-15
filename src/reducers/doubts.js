import {ACCEPT_DOUBT, UPDATE_DOUBTS} from '../actions/actionTypes';

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
        case ACCEPT_DOUBT:
            const new_doubts=[];
            state.doubts.map((doubt)=>
            {
                if(doubt.id!==action.doubt.id)
                {//we are removing a doubt
                    new_doubts.push(doubt);
                }
                return doubt;
            });

            return {
                doubts:new_doubts,
                ...state
            }   
        default:
            return state    
    }
}