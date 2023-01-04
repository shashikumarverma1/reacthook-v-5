import React ,{useState , useMemo} from 'react'

const Usememo1 = () => {
  const [count, setcount] = useState(0)
   const [show, setshow] = useState(false)
   const getval=()=>{
       setcount(count+1)
   }
     const getdata =(A)=>{
          //  console.log("getdata")
           for(let i=0;i<100000000;i++){}
           return A
     }
     const checkdata =useMemo(()=>{
     return getdata(count)
     },[count])


    // const checkdata=getdata(count)


   return (
    <>
    <h5 className='m-3 mt-10 bg-green-800 py-3 rounded text-yellow-500'>usememo</h5>
     <h5 className='m-3'>{checkdata}</h5>
    <button  onClick={getval} className="rounded bg-blue-500 p-2 w-20 m-2">Add</button>
    <button className="rounded bg-green-800 p-2 m-2" onClick={()=>setshow(!show)}>{
      show ? <b>click me please</b> :<b> click me</b>
      }</button>
    </>
   )
}

export default Usememo1