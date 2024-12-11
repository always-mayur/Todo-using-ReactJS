import { useState } from "react";

export default function Form(){
// let [fullName,setFullName]=useState("");
let [formData,setFormData]=useState({
    fullname:"",userName:""
});


let handleInputChange=(event)=>{
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData)=>{
        currData[fieldName]=newValue ;
        return {...currData}
    })
}

let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(formData);
    setFormData({
        fullName:"",userName:""
    })
}

    return ( <div>
<form onSubmit={handleSubmit}>
    <label htmlFor="fullName">Full Name </label>
    <input placeholder="type here" type="text" id="fullName" name="fullName"
    value={formData.fullName} onChange={handleInputChange}></input>
    <br></br>
    <br></br>
    <label htmlFor="userName">user Name </label>
    <input placeholder="type here" type="text" id="userName" name="userName"
    value={formData.userName} onChange={handleInputChange}></input>

    <button>Submit</button>
</form>
    </div>
    )
}