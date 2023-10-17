import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagCheckFill } from 'react-icons/bs'

export default function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <div>
      <section className='card-container'>
        <section className='card'>
          <img className='card-img' src={img} alt={title} />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className='card-reviews'>
              {/* <AiFillStar className='rating-cards' /><AiFillStar className='rating-cards' /><AiFillStar className='rating-cards' /><AiFillStar className='rating-cards' /> */}
              {star}{star}{star}{star}
              <span className='total-reviews'>{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <BsFillBagCheckFill className='bag-icon'/>
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}
