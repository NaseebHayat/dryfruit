import React from 'react'

export default function Heading() {



  return (
    <>
   
    <div className='headerPhoto'>
      <img className='headerPhoto' src="/images/HeaderPhoto.jpg" alt="" />
    </div>
  <div className="hello"></div>
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Items</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Our Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
