import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
          <div className="card bg-dark text-white border-0">
              <img src="https://images.unsplash.com/photo-1656177251479-86249dab2a2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img" alt="background" height="550px" />
              <div className="card-img-overlay d-flex flex-column justify-content-center ">
                <div className="container">

                  <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
                  <p className="card-text lead fs-2">
                    Check out all the trends
                  </p>
                 </div>
              </div>
          </div>
          <Products/>
    </div>
  )
}

export default Home