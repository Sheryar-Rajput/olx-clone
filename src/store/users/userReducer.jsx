
function userReducer(state = {},action  ) {
    switch(action.type) {
        case 'ADD_USER': return { ...state, user: action.payload }
        case 'USER_ADD' : return {   ...state, ads : action.payload }
        case 'REMOVE_USER': return { ...state, user: null }
        default: return state
      }
}

export default userReducer