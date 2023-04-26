import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const QuoteTable = () => {

    const [users,setUsers] = useState([])

    const getUsers = async()=> {
        const {data} = await axios.get(`${process.env.REACT_APP_API}/api/user/users/quote`)
        // console.log(data);
        setUsers(data?.users)
    }

    useEffect(()=>{
       getUsers()
    },[])

    let i=1;

  return (
    <>
        <Navbar/>
        <h1 className='text-center mb-3'> Quote Table</h1>
        <h3 className='text-center m-3'>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h3>

        <table className="text-center table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Income</th>
            <th>City</th>
            <th>Car</th>
            <th>Quote</th>
            <th>Phone Price</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{i++}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>${user.income}</td>
              <td>{user.city}</td>
              <td>{user.car}</td>
              <td>{user.quote}</td>
              <td>{user.phone_price}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default QuoteTable