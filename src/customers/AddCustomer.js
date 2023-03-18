import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function AddCustomer() {

    let navigate=useNavigate()

    const [customer,setCustomer] = useState({
        name:"",
        email:"",
        age:""
    })

    const{name,email,age}=customer

    const onInputChange = (e)=>{
        setCustomer({...customer, [e.target.name]:e.target.value})
    }

    const onSubmit= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/customers",customer)
        navigate("/")
    }

  return (
    <div className = "container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded shadow border-dark p-4 mt-2">
                <h2 className='text-center m-4'>Add New Customer</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className='form-label'>
                        Name:
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter a name:'
                    name ="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className='form-label'>
                        E-mail:
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder='Enter an email address:'
                    name ="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className='form-label'>
                        Age:
                    </label>
                    <input
                    type={"number"}
                    className="form-control"
                    placeholder='Enter the age:'
                    name ="age"
                    value={age}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type="submit" className='btn btn-primary'>Submit</button>
                <Link className='btn btn-danger mx-2' to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}
