import { ADDBYONE, RESET, SUBTRACKBYONE } from "../_constants";

export const rootReducer = (oldState={value:99},action)=>{
    let newState = oldState;
  
    switch(action.type){
      case ADDBYONE:
         return{
           ...newState,
           value: newState.value + action.payload
         }
        break;
        case SUBTRACKBYONE:
          return{
            ...newState,
            value:newState.value - action.payload
          }
        break;
        case RESET:
          return{
            ...newState,
            value: newState.value = action.payload
          }
        break;
      default:  
      return newState
    }
   
  }