


import jsonData from "./ProductDetails.json"
import AutoLayoutExample from './Details';
import Section10 from "../Section10/Section10";


function CartFunction() {
  return (
    <div className="App">
     {jsonData.map((item)=>(
      <AutoLayoutExample key={item.id} {...item}
      
      />
     ))}
   
     
    </div>
  );
}

export default CartFunction;
