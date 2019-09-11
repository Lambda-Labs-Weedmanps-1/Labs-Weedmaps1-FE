import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './customerView.sass'

function CustomerView() {

  const [customer, setCustomer] = useState([{}])
  const [review, setReview] = useState([{}])

// This pulls the user_id from local storage
  let user_id = localStorage.getItem("user_id");

  useEffect(() => {
    //api call to get the information on the users customer status
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`)
        .then(res =>{
            setCustomer(res.data)
            console.log(res.data, 'customer')
            // api call to get the reviews connect to the customer it must be nested in order to get the id of the customer
          Axios.get(`${process.env.REACT_APP_BACKEND_URL}customers/${res.data[0].id}/reviews`)
          .then(res =>{
              setReview(res.data)
              console.log(res.data, 'review')
          })
          .catch(err =>{
              console.log('ERROR GETTING REVIEWS\n', err)
          })
        })
        .catch(err =>{
            console.log('ERROR GETTING CUSTOMER\n', err)
        })
        setTimeout(function(){ 
          
       }, 5000);
      }, [])

  return (
    <div className="c-view">
      {/* customer image */}
       {customer[0].image === null || customer[0].image === undefined ? 
      <p>Image loading....</p> : 
      <img className="image" src={customer[0].image['url']} alt="customer portrait" />}
      {/* Name */}
      <h1 className="name-box">
      {customer[0].custname}
      </h1>
      <div>
        <h3>Your Reviews</h3>
        {review.map(review =>(
          <div className="review-box">
            <p>{review.created_at}</p>
            <p>{review.rating}</p>
            <p>{review.review}</p>
          </div>)
        )}
      </div>
    </div>
  )
}

export default CustomerView

