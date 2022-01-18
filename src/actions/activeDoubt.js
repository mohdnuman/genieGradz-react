import { APIUrls } from '../helpers/urls';
import { UPDATE_ACTIVE_DOUBT, UPDATE_RESOLVED_DOUBT} from './actionTypes';

export function fetchActiveDoubt(id){
    return (dispatch)=>{
        const url=APIUrls.fetchActiveDoubt(id);
        fetch(url).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            // console.log(data);
            dispatch(updateActiveDoubt(data.doubt));
        });
    };
} 

export function updateActiveDoubt(activeDoubt){
    return {
        type:UPDATE_ACTIVE_DOUBT,
        activeDoubt,
    };
} 

export function resolveDoubt(id){

    return (dispatch)=>{
        // console.log(id);
        const url=APIUrls.resolve(id);
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            // body:getFormBody({user}),
        })
        .then((response)=>{
           
            return response.json();
        }).then((data)=>{
           console.log(data);
            dispatch(updateResolvedDoubt(data.doubt));
        });
    };
}

export function updateResolvedDoubt(resolvedDoubt){
    return {
        type:UPDATE_RESOLVED_DOUBT,
        resolvedDoubt,
    };
} 
