
import { Navigate } from "react-router-dom";

function Work() {
     function learn () {
       if(document.getElementsByClassName('soc-item').length !==0 ){
         console.log('work');
       }else{
         setTimeout(()=> {
          window.location.reload();
         },100);
       }
     }
return(<>
  {<Navigate to="RoboSoc/index.html" />}
  {learn()}
</>)
} 

export default Work;