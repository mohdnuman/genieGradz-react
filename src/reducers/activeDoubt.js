import {UPDATE_ACTIVE_DOUBT,UPDATE_RESOLVED_DOUBT} from '../actions/actionTypes';

const initialActiveDoubtState={

}

export default function activeDoubt(state=initialActiveDoubtState,action){
    switch(action.type){
        case UPDATE_ACTIVE_DOUBT:
            return action.activeDoubt;
        case UPDATE_RESOLVED_DOUBT:
            return action.resolvedDoubt;
        default:
            return state;
    }
}    