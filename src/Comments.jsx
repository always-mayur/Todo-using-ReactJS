import { useState } from "react";

export default function Comments(){
let [formData,setFormData]=useState({
    userName:"" , remarks:" ",rating:5
})

let handleInputChange=(event)=>{
    setFormData((currData)=>{
        return {...currData,[event.target.name] : event.target.value}
    })
}

let handleSubmit =(event)=>{
    event.preventDefault();
    console.log(formData);
    setFormData({
    userName:"",remarks:"",rating:5
    })
}

return ( <div>
    <h1>Give Your Review!</h1>
    <form onSubmit={handleSubmit}>

    <label htmlFor="username">userName </label>
    <input placeholder="userName" type="text" 
    id="username" value={formData.userName} onChange={handleInputChange} 
    name="userName" />
    <br></br>
    <br></br>

    <label htmlFor="remarks">Remarks </label>
    <textarea placeholder="add few remarks" type="text" 
    id="remarks" value={formData.remarks} onChange={handleInputChange} 
    name="remarks" />
    <br></br>
    <br></br>

    <label htmlFor="rating">rating </label>
    <input placeholder="rating" type="number"
    id="rating" min={1} max={5}
    value={formData.rating} onChange={handleInputChange} 
    name="rating" />
    <br></br>
    <br></br>

    <button>Submit</button>
    </form>
</div>
)
}

