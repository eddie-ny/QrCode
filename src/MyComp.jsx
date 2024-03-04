// import React, {useState} from "react";

// function MyComponent(){

//     const [name, setName] = useState();
//     const [age, setAge] = useState(0);
//     const [isStudent, setIsStudent] = useState();
//     const [reset, setReset] = useState();

//     const updateName =() =>{
//         setName("Karuna")
//     }

//     const updateAge = ()=>{
//         setAge("20")
//     }

//     const updateIsStudent = () =>{
//         setIsStudent(true)
//     } 

//     const incrementAge =() =>{
//         setAge(age+1);
//     }

//     const decrementAge = () =>{
//         setAge(age-1);
//     }

//     const resetSet = ()=>{
//         setAge(0)
//     }

//     return(

//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>
//             <p>Age: {age}</p>
//             <button onClick={incrementAge}>Increase Age</button><br/>
//             <button onClick={decrementAge}>Decrease Age</button><br/>
//             <button onClick={resetSet}>Reset</button>
           
//         </div>

//     );

// }
// export default MyComponent




// 



import React, {useState} from "react";



function MyComponent(){

    const [name, setName] = useState("Guest");
    const [year, setYear] = useState(2023);
    const [payment, setPayment] = useState("")
    const[shipping, setShipping] = useState("Delivery")

    function handleShippingChange(event){
        setShipping(event.target.value);
    }



    function handlePaymentChange(event){
        setPayment(event.target.value);
    
    }

    function handleYearChange(event){
        setYear(event.target.value);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    return(<div>
            <input value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={year} onChange={(handleYearChange)} type="number" />
            <p>Year: {year}</p>

            <select value={payment} onChange={handlePaymentChange} >
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MC">Mastercard</option>
                <option value="GC">Gift card</option>           
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value = "Pick up" 
                     checked={shipping === "Pick up"} onChange={handleShippingChange}/>
                Pick up
            </label>

            <label>
            <input type="radio" value = "Delivery" 
                     checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
            

    </div>);

}

export default MyComponent;