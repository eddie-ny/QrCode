
function User(props){

    
        if(props.isLoggedIn){
            return <h2>Welcome {props.username}</h2>

        }
           else{
            return(<h2>Where is Karuna?</h2>)
           }
    
}

export default User;