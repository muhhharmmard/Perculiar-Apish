
import eruda from "eruda"
import React,{
  useRef,
  useEffect
} from "react"
const Eruda = () =>{
  const erRef = useRef(null);
  useEffect(()=>{
  eruda.init();
},[])
  return (
    
    <div ref={erRef}>
    b d
    </div>
    )
}




export default Eruda



