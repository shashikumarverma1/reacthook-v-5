import React ,{useRef} from 'react'
// import '../index.css'
const Userefhook = () => {
  const ref1=useRef(null)
  const refhandal=()=>{
  //  console.log("click" , ref1)
   let ref=ref1.current
   ref.style.color="red"
   ref.focus()
   ref.style.backgroundColor="aqua"
  //  ref.style.display="none"
  ref.value="q hila dala na !"

  }
  return (
    <div className='m-5 '>
        <h1 className='bg-red-500 w-100 p-2 rounded text-black-500'>useRefhook</h1>
        
        <input type="text" ref ={ref1} className='rounded bg-red-200 mt-5 mx-5 border-2 border-slate-900 p-2'/>
        <button onClick={refhandal} className="bg-green-900 p-2 w-16 rounded">click</button>
        
        </div>
  )
}

export default Userefhook