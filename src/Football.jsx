function Football(){
    let shoot = () =>{
        return alert("Great shot!");
    }

    return (
        <button onClick={shoot}>Take the Shot!</button>
    )
}

export default Football;