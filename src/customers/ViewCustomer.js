import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './View.css';

export default function ViewCustomer() {

    const [customer,setCustomer]=useState({
        name:"",
        email:"",
        age:""
    })

    const {id}=useParams();

    useEffect(()=>{
        loadCustomer()
    },[])

    const loadCustomer=async ()=>{
        const result =await axios.get(`http://localhost:8080/api/v1/customers/${id}`)
        setCustomer(result.data)
    }

  return (
    <div className="container">
    <div className="card bg-transparent border border-dark">
      <div className="card-header bg-dark text-white">
        <h2 className="card-title mb-0 text-center">Customer Details</h2>
      </div>
      <div className="card-body border-bottom border-dark ">
        <div className="customer-info border border-dark">
          <h3 className="info-title">Details of customer with ID: {id}</h3>
          <ul className="info-list">
            <li className="info-item">
              <span className="info-label">Name:</span> {customer.name}
            </li>
            <li className="info-item">
              <span className="info-label">Email:</span> {customer.email}
            </li>
            <li className="info-item">
              <span className="info-label">Age:</span> {customer.age}
            </li>
          </ul>
        </div>
      </div>
      <div className="card-footer bg-transparent">
        <Link className='btn btn-primary mx-2' to="/">Cancel</Link>
      </div>
    </div>
  </div>
  )
}
