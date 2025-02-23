import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MailboxForm = (props)=>{

    const navigate = useNavigate()

    const initialState ={
        boxSize:'',
        boxHolder:'',
    }

    const[formData,setFormData]= useState(initialState)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addBox(formData)
        navigate('/mailboxes')
        setFormData(initialState)
    }

    return(
    <>
    <form onSubmit={handleSubmit}>

        <label>Enter a Boxholder:</label>
        <input type="text" onChange={handleChange} value={formData.boxHolder} name="boxHolder"/>

        <label>Enter a Box Size:</label>
        {/* <input type="text" onChange={handleChange} value={formData.boxSize} name="boxSize"/> */}
        <select 
          name="boxSize" 
          value={formData.boxSize} 
          onChange={handleChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button type="submit">Submit</button>

    </form>
    </>

    )
}

export default MailboxForm