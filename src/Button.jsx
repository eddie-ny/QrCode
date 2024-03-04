
function Button(){


    let count = 0;
    const handleClick=(e)=> e.target.textContent = "HEATTTTT🔥🔥🔥";
        
    


    // const handleClick2=(name) => console.log(`${name} hey hey hey`);

    return(
<button onDoubleClick={(e) => handleClick(e)}>Click me 🔥🔥🔥</button>
    );
}

export default Button