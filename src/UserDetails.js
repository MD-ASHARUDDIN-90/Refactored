import React from 'react'
import {useState} from 'react'
// import {Link} from 'react-router-dom'
import Pagination from './Pagination'
// import './style.css'
import './App.css'
import { Link } from 'react-router-dom'

export default function UserDetails(){
  const[ restData ,setRestData]=useState([])
  const[ search ,setSearch]=useState("")
  const[ email ,setEmail]=useState("")
  const[ country ,setCountry]=useState("")


 let list = JSON.parse(localStorage.getItem("userList"))
//  console.log(list)
 const newARR = list.filter((x,i)=> i>=0 && i <=9)
 console.log(newARR)
    
 function captureSearch(e){
  setSearch(e.target.value)
 }
 function captureEmail(e){
  setEmail(e.target.value)
 }
 function captureCountry(e){
  setCountry(e.target.value)
 }


  return(
    <>
   <Pagination/>
   <div className="inputbox">
   <Link className='home' to='/' >Home</Link>
   <input type='text' placeholder="Filter By Name" value={search} onChange={captureSearch}/>

   <input type='text' placeholder="Filter By Email" value={email} onChange={captureEmail}/>
   <input type='text' placeholder="Filter By Country" value={country} onChange={captureCountry}/>
   </div>
   <div className="tablebox">
    <table >
    <tr>
    <th>IMAGE</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>GENDER</th>
        <th>PHONE</th>
        <th>COUNTRY</th>
        </tr>
    
     
    {newARR.filter(y=>y.name.first.toLowerCase().includes(search.toLowerCase())).filter(y=>y.email.toLowerCase().includes(email)).
    filter(y=>y.location.country.toLowerCase().includes(country.toLowerCase())).map((x , i)=><>
      
      
        <tr key={i}>
          <td><img src={x.picture.thumbnail} alt="" /></td>
          <td>{x.name.first} {x.name.last}</td>
          <td>{x.email}</td> 
          <td>{x.gender}</td>
          <td>{x.phone}</td>
          <td>{x.location.country}</td>
        </tr>
        
    
  
    
    
    </>)}
    </table> </div>
    </>
  )
}