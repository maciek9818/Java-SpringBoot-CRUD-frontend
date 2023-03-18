import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

    const [customers, setCustomer] = useState([]);

    const {id} =useParams()

    useEffect(()=>{
        loadCustomers();
    },[]);

    const loadCustomers= async ()=>{
        const result = await axios.get("http://localhost:8080/api/v1/customers");
        setCustomer(result.data)
    };
    const deleteCustomers = async (id)=>{
        await axios.delete(`http://localhost:8080/api/v1/customers/${id}`)
        loadCustomers()
    };
  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow border-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map((customer,index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.age}</td>
                            <td>
                                <Link className="btn btn-primary mx-2"
                                to={`/view/${customer.id}`}
                                >View</Link>
                                <Link className="btn btn-dark mx-2"
                                to={`/edit/${customer.id}`}
                                >Edit</Link>
                                <button className="btn btn-danger mx-2"
                                onClick={()=> deleteCustomers(customer.id)}
                                >Delete</button>
                            </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
        </div>
    </div>
  )
}
