const INITIAL_STATE = {
    userName: []

}
export default (state = INITIAL_STATE, action) => {
    // console.log("reducer ", action.type)
          switch (action.type) {
              case 'USERNAME' :
                  return ({...state,
                     userName: [ ...state.userName, action.payload ]
                  })
              case 'DELETE_ITEM' :
            //   console.warn(id)
            return {
                userName : state.userName.filter((item, index) => index !== action.payload)
                  }
                  default:
                  return state;
          }
      
      }