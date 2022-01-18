import { APIUrls } from '../helpers/urls';
import {UPDATE_DOUBTS,ACCEPT_DOUBT} from './actionTypes';
import  getFormBody  from '../helpers/utils';
// import getFormBody, { getAuthTokenFromLocalStorage } from '../helpers/utils';

export function fetchDoubts(){
    return (dispatch)=>{
        const url=APIUrls.fetchDoubts();
        fetch(url).then((response)=>{
            // console.log(response);
            return response.json();
        }).then((data)=>{
            // console.log(data);
            dispatch(updateDoubts(data.doubts));
        });
    };
} 

export function updateDoubts(doubts){
    return {
        type:UPDATE_DOUBTS,
        doubts,
    };
} 

export function takeDoubt(id,user){
    return (dispatch)=>{
        // console.log(id);
        const url=APIUrls.acceptDoubt(id);
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            },
            body:getFormBody({user}),
        })
        .then((response)=>{
           
            return response.json();
        }).then((data)=>{
           
            dispatch(acceptDoubt(data.doubt));
        });
    };
}

export function acceptDoubt(doubt){
    return {
        type:ACCEPT_DOUBT,
        doubt,
    };
}

// export function addPost(post){
//     return{
//         type:ADD_POST,
//         post,
//     }
// }

// export function createPost(content){
//     return(dispatch)=>{
//         const url=APIUrls.createPost();
//         fetch(url,{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/x-www-form-urlencoded',
//                 'Authorization':`Bearer ${getAuthTokenFromLocalStorage()}`
//             },
//             body:getFormBody({content}),
//         })
//         .then((response)=>response.json())
//         .then((data)=>{
//             console.log("data",data);

//             if(data.success){
//                 dispatch(addPost(data.data.post));
//             }
//         })
//     }
// }

// export function addComment(comment, postId) {
// 	return {
// 		type: ADD_COMMENT,
// 		comment,
// 		postId
// 	};
// }

// export function createComment(content, postId) {
// 	return (dispatch) => {
// 		const url = APIUrls.commentCreator();
// 		fetch(url, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/x-www-form-urlencoded",
// 				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
// 			},
// 			body: getFormBody({ content, post_id: postId })
// 		})
// 			.then((response) => response.json())
// 			.then((data) => {
// 				if (data.success) {
// 					dispatch(addComment(data.data.comment, postId));
// 				}
// 			});
// 	};
// }

// export function addLike(id,likeType,userId){
//     return (dispatch)=>{
//         const url=APIUrls.toggleLike(id,likeType);
//         fetch(url,{
//             method: "POST",
// 			headers: {
// 				"Content-Type": "application/x-www-form-urlencoded",
// 				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
// 			},
//         })
//         .then((response)=>response.json())
//         .then((data)=>{
//             if(data.success){
//                 dispatch(addLikeToStore(id,userId))
//             }
//         })
//     }
// }
// export function addLikeToStore(postId,userId){
//     return{
//         type:UPDATE_POST_LIKE,
//         postId,
//         userId
//     }

// }
