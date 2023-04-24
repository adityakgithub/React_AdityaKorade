import {useState} from "react";

export default function Product(props) {
    const [count, setCount] = useState(0);

    const {details} = props;

    function handleIncrementClick() {
        setCount(count + 1);
    }
    function handleDecrementClick() {
        if (count > 0){
            setCount(count - 1);
        }
    }

    return <div className="product">
        <img src={details.image} width="50" alt="" />
        <div className="product-info">
            <h2>{details.name}</h2>
            <p>{details.description}</p>
        </div>
        <div className="product-buttons">
            <button className="product-sub" disabled={count === 0} onClick={handleDecrementClick}>-</button>
            <h3 className="product-count">{count ? count : ""}</h3>
            <button className="product-add" onClick={handleIncrementClick}>+</button>
        </div>
    </div>
}

// import {useState} from "react";

// export default function Product(props) {
//     //console.log(props.details);
//     const [count,setCount] = useState(0);
//     const [buttonStatus, setButtonStatus] = useState("");

//     function handleIncrementButton(){
//         if(count>=0){
//             setButtonStatus(false)
//         }else{
//             setButtonStatus(true);
//         }
//         setCount(count+1);
//         // if(count>0 ||count==0){
//         //     setCount(count+1);
//         //     setButtonStatus("")
//         // }
//         // if(count<1){
//         //     setButtonStatus("disabled")
//         // }else{
//         //     setButtonStatus("")
//         // }
        
//     }
//     function handleDecrementButton(){
//         if(count>=2){
//             setCount(count-1);
//             setButtonStatus(false)
//         }else{
//             setButtonStatus(true)
//         }      
//         if(count===1){
//             setCount(1);
//         }
//     }
//     return <div className="product">
//         <img width="50" src={props.details.image} alt="props.details.image" />
//         <div className="product-info">
//             <h2>{props.details.name}</h2>
//             <p>{props.details.description}</p>
//         </div>
//         <div className="product-buttons">
//             <button className="product-sub" disabled={count===0} onClick={handleDecrementButton}>-</button>
//             <h3 className="product-count">{count>0?count:""}</h3>
//             <button className="product-add" onClick={handleIncrementButton}>+</button>
//         </div>
//     </div>
// }