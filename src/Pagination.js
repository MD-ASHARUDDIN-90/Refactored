import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
export default function Pagination(){
  return(
    <>
    <div className="links">
    <p>PAGES</p>
    <Link className="link" to='/userdetails1'>1</Link>
    <Link className="link" to='/userdetails2'>2</Link>
    <Link className="link" to='/userdetails3'>3</Link>
    <Link className="link" to='/userdetails4'>4</Link>
    </div>

    </>
  )
}