
function adsReducer(state = {}, action) {
        switch(action.type) {
          case 'USER_ADD' : return {   ...state, ads : action.payload }
        }
      }


export default adsReducer