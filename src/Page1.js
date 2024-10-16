// note : you have to import every function component to use them..
//1. this is function component ...
// import it and use it anywhere

// function Hellotxt(){
//     return (<h1>Bloody Hell!</h1>)
// }
// export default Hellotxt;

// Note: function name first letter should be capital 

//2. this is class component 
// import and use it anywhere in files

// import React, { Component } from "react";
// export default class Yeah extends Component {
//     render() {
//         return (
//             <h1>YEAH!!!!!</h1>

//         )
//     }

// }
// ....


// 3. this is props using a function component..
function Propss(props){
console.log(props)
    return(

        <div>
            <h1>Name : {props.name}</h1>
            <h1>Email : {props.email}</h1>
        </div>
    )
}
export default Propss

// this is for myapp.js file 