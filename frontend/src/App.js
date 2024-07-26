//1.import area
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import { ADDBYONE, RESET, SUBTRACKBYONE } from './_constants';

//2.defination area

function App() {

  //2.1 hooks area

  let storeObject = useSelector(storeObject => storeObject )

  let dispatch = useDispatch()



  //2.2 function defination area



  //2.3 return statement
  return (
      <div className="App">
        {console.log(storeObject)}
        <h1>{storeObject.value}</h1>
        <button onClick={()=>{dispatch({type: ADDBYONE, payload:1})}}>+</button>
        <button onClick={()=>{dispatch({type: RESET,payload:0})}}>Reset</button>
        <button onClick={()=>{dispatch({type: SUBTRACKBYONE, payload:1})}}>-</button>
      </div>
    );
}

//3.export area
export default App;
