export const RECIEVE_USERS = "RECIEVE_USERS";

export const SELECTED_USERNAME = "SELECTED_USERNAME";

// to get users data
export const getUsers=(users)=> {
  return {
    type: RECIEVE_USERS,
    users,
  };
}


export const Selecteduser =(username) =>{
  return {
    type: SELECTED_USERNAME,
    username,
  }; 
}

export const handleSelectUser = (username) => (dispatch) => {
  dispatch(Selecteduser(username));
};
