
var initialstate = {
    myData:""
}

const todoReciving = (state = initialstate,action)=>{

    switch(action.type) {
        case "Mudasirkaredux":
            return{
                ...state,
                myData: action.Payload
            }
      
       
        default:
          return state
          
      }
}

export {todoReciving}



