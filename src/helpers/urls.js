const API_ROOT='http://loaclhost:8000/api';

export const APIUrls={
    fetchDoubts:()=>`${API_ROOT}/doubts`,
    // login:()=>`${API_ROOT}/users/login`,
    // signup:()=>`${API_ROOT}/users/signup`,
    // editProfile:()=>`${API_ROOT}/users/edit`,
    // userProfile:(userId)=>`${API_ROOT}/users/${userId}`,
    // userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
	// addFriend: (userId) =>
	// 	`${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
	// removeFriendship: (userId) =>
	// 	`${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
    // createPost:()=>`${API_ROOT}/posts/create`,
    // commentCreator: () => `${API_ROOT}/comments`,
    // toggleLike:(id,likeType)=> `${API_ROOT}/likes/toggle?likeable_id=${id}&likeable_type=${likeType}`,
    // userSearch:(searchtext)=> `${API_ROOT}/users/search?text=${searchtext}`,
}