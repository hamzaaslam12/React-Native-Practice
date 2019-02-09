export const changeUserName = (name) => ({
          // console.log("action.js " , name)
         type: 'USERNAME',
         payload: name
       
      })
export const deleteItem = (id) => ({

          // console.log("action.js " , name)
         type: 'DELETE_ITEM',
         payload: id
       
      })

