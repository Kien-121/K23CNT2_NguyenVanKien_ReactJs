import React from "react"

export default function NvkJsExpression() {
    // bien
    const name="Nguyen Van Kien";
    const user ={
        firstName:"Kien",
        lastName:"Nguyen"
    }
    // ham
    const fullName=(user)=>{
        return  user.firstName + ' ' + user.lastName  ;
    }
    // element
    const element =(
        <div>
            {/* bieu thuc jsx*/}
            <h2>{fullName(user)}</h2> 
            <hr/>
            <h3>Welcome to, {name}</h3>
        </div>
    );

    //ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3> Welcome to Fit-NTU - K23CNT2</h3>
        }
    }
    return (
        <div>
            <h1>NVK - JSX Expression</h1>
            {/* su dung bien element*/}
            {element}

            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome("Nguyen Van Kien")}
        </div>
    )
}