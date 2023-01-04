import React,{useReducer} from 'react'

const Usereducer1 = () => {

 const func1=(state,action)=>{
    // console.log(action.type)
    if(action.type==="IN"){
      return state+1 
    }
    if(action.type==="DE"){
      return state-1 
    }
       
 }
 const [state ,dispatch]= useReducer(func1 ,0)
  return (
    <div className='mt-5'>
      <h5 className='m-5  bg-yellow-500 rounded py-2  justify-self-center'>usereducer</h5>
    <h2 className='m-5 text-red-900 bg-yellow-500 rounded'>{state}</h2>
     <button onClick={()=>dispatch({type:"IN"})} className="m-5 bg-blue-800 p-2 rounded w-16">Add</button>
     <button onClick={()=>dispatch({type:"DE"})} className="m-5 bg-blue-800 p-2 rounded w-16">dec</button>
    </div>
  )
}

export default Usereducer1